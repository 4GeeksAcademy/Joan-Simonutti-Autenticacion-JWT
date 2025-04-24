import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  const handleLogout = () => {
    actions.logout()
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="secondary">
      <div className="container px-2">
        <a className="navbar-brand" href="/">Autenticacion JWT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/registro">Registro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggler" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Perfil
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="/perfil">Mi Perfil</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" onClick={handleLogout}>Cerrar Sesión</a></li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};