import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // authentication state observer
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              console.log('user in the auth state', currentUser)
              const uid = currentUser.uid;
              console.log(uid)
              setUser(currentUser)
              setLoading(false)
            } else {
              setUser(null)
            }
          });
    },[user])

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
    const loginWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // login with github
    const loginWithGithub = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    } 


    // update a user 
    const updateUserProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
    }

    // logout user
    const logoutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    console.log(user);

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