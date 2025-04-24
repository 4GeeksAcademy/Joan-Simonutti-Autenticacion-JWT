import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

useEffect(()=>{
	if (!store.user && localStorage.getItem('token')) actions.getUserData()
},[])
	return (
		<div className="text-center mt-5">
			<div className="container justify-content-center">
				<h1>Autenticacion JWT</h1>
				{store.user?.name ? <h2>Bienvenido {store.user?.name}</h2> : <h2>Bienvenido invitado</h2>}
			</div>
		</div>
	);
};