import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Formulario = ({ type }) => {

    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleSubmit = e => {
        e.preventDefault()
        console.log('Submit', formData)
        const success = type === 'login' ? actions.login(formData) : actions.register(formData);

                if (success) {
                    navigate("/"); 
                }
};

    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
            
            {type === 'register' && (
                    <div className="mb-2 row">
                        <label htmlFor="staticName" className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Nombre"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                )}

                <div className="mb-2 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}