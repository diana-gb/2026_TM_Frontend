import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext()

export const AUTH_TOKEN_KEY = 'auth_token'

function AuthContextProvider ({children}){

    const [isLogged, setIsLogged] = useState(false)
    const [session, setSession] = useState(null)

    useEffect(
        /* 
        Normalmente los backend suelen tener un endpoint
        GET / api / auth / validate-token (Authorization: bear auth-token) Te responde si el token es valido o no
        */
        () => {
            const auth_token = localStorage.getItem(AUTH_TOKEN_KEY)
            if(auth_token){
                setIsLogged(true)
                const session_decoded = jwtDecode(auth_token)
                setSession(session_decoded)
            }
        },
        []
    )

    function saveSession (auth_token){
        localStorage.setItem(AUTH_TOKEN_KEY, auth_token)
        setIsLogged(true)
        const sesion_decoded = jwtDecode(auth_token)
        setSession(sesion_decoded)
    }

        const providerVALUES = {
            saveSession,
            session,
            isLogged
        }
        
    return(
        <AuthContext.Provider value={providerVALUES}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider