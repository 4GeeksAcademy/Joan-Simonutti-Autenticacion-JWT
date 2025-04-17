import React from "react";
import { Formulario } from "../component/formulario.jsx";



export const Register = () => {

    return (
        <div className="text-center mt-5">
            <div className="container w-50">
                <div className="row grid gap-3">
                    <div className="m-3 p-2 g-col-6 shadow-lg rounded">
                        <h2>Register</h2>
                        <Formulario type={'register'}/> 
                    </div>
                </div>
            </div>
        </div>
    );
}