import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)

    // authentication state observer
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              console.log('user in the auth state', currentUser)
              const uid = currentUser.uid;
              console.log(uid)
              setUser(currentUser)
              
            } else {
              setUser(null)
            }
          });
    },[user])

    // Create new user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login Users with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login user with google
    const loginWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // login with github
    const loginWithGithub = (provider) =>{
        return signInWithPopup(auth, provider)
    } 


    // update a user 
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
    }

    // logout user
    const logoutUser = () =>{
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