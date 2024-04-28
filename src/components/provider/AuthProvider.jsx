/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  //state for user data
    const [user, setUser] = useState(null);
    //state for loading
    const [loading, setLoading] = useState(true);
    //creating new user function
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
       
       //user signout function
        const userSignOut = () =>{
            setLoading(true);
            
            return signOut(auth)
        }

        //user login function
        const userLogin = (email, password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
        }

     //useEffect to use observe on state change
     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }else{
                setUser(null)
                setLoading(false);
            }
           
        });
        
        return () =>  unSubscribe();
    },[])

    const authInfo = {user, setUser, loading, setLoading, createUser, userSignOut, userLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;