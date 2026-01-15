import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

function AuthMiddlewares () {
    const {isLogged} = useContext(AuthContext)

    if(isLogged){
        return <Outlet/>
    }
    else{
        return <Navigate to ={'/login'} />
    }

}

export default AuthMiddlewares