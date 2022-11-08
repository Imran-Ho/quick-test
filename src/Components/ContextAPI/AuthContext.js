import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const ContextAuth = createContext();
const auth = getAuth(app)


const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

//create user
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

// sign in
const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
// sign out
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

useEffect( () =>{
    const unSubscribe = onAuthStateChanged( auth, currentUser =>{
        console.log('current User inside state change', currentUser);
        setUser(currentUser);
        setLoading(false);
    });

    return () => unSubscribe();

}, [])

    const authInfo = {user, createUser, signIn, logOut}
    return (
        <ContextAuth.Provider value={authInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

export default AuthContext;