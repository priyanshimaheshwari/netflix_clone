import { createContext,useContext,useEffect,useState } from "react"
import { auth } from "../firebase"
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,} from 'firebase/auth'

const AuthContext =createContext()

export function AuthContextProvider({children}) {
    


    return
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
}

export function UserAuth(){
    return useContext(AuthContext)
}