import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

 export const Perfil= () =>{

    const {store, actions} = useContext(Context)
    const navigate = useNavigate()

    const handleLogout = () =>{
        actions.logout()
        navigate ('/')
    }
    
    useEffect(()=>{
        if(!localStorage.getItem('token')) navigate('/')
            actions.getUserData()
    },[])
    return(
        <div className="container mt-4">
    <div className="card shadow-lg rounded" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="card-body text-center">
            <h3 className="card-title mb-4">Perfil de Usuario</h3>
            <div className="mb-3">
                <p className="mb-1"><strong>Nombre:</strong> {store.user?.name}</p>
                <p className="mb-1"><strong>Correo:</strong> {store.user?.email}</p>
            </div>
            <div className="d-grid gap-2">
                <button 
                    className="btn btn-danger  btn-sm" 
                    onClick={handleLogout}
                >
                    Cerrar sesión
                </button>
            </div>
        </div>
    </div>
</div>
    )
 }