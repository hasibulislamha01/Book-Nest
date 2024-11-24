import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const localTheme = localStorage.getItem('theme') || 'light'
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(localTheme)

    // authentication state observer
    useEffect(() => {
        onAuthStateChanged(auth, async (currentUser) => {
            const loggedUser = { email: currentUser?.email || user?.email }
            if (currentUser) {
                console.log('user in the auth state', currentUser)
                setUser(currentUser)
                setLoading(false)

                // generating token
                await axios.post('https://booknest-phi.vercel.app/jwt',
                    loggedUser,
                    { withCredentials: true }
                )
                    .then(response => {
                        console.log('token', response.data)
                    }).catch(error => {
                        console.error(error.message)
                    })

            } else {
                axios.post('https://booknest-phi.vercel.app/logout',
                    loggedUser,
                    { withCredentials: true })
                    .then(response => {
                        console.log('token clear', response.data)
                    }).catch(error => {
                        console.error(error.message)
                    })
                setUser(null)
                setLoading(false)
            }
        });
    }, [auth, user?.email])

    // Create new user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login Users with email and password
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login user with google
    const loginWithGoogle = async (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // login with github
    const loginWithGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // update a user 
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // logout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    console.log(user);


    // -------------- Theme controlling logics here ------------------//
    const toggleTheme = () => {
        if (theme === 'light') { setTheme('dark') }
        if (theme === 'dark') { setTheme('light') }
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    // these data will be passed with context api using useContext
    const authData = {
        createUser,
        loginUser,
        loginWithGoogle,
        loginWithGithub,
        updateUserProfile,
        logoutUser,
        loading,
        user,
        theme,
        toggleTheme
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;