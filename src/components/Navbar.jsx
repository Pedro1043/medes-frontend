import React, { useState } from 'react'

import { Link, Outlet, NavLink, useLocation } from 'react-router-dom';

import "./Navbar.css"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {state} = useLocation()

  console.log(state);

  return (
    <nav>
        <Link to="/" className='title'> 
          MEDES
        </Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open": ""}>
            <li>
                <NavLink to="/paciente">Paciente</NavLink>
            </li>
            <li>
                <NavLink to="/enfermedad">Enfermedad</NavLink>
            </li>
            <li>
                <NavLink to="/examenfisico">Examen Fisico</NavLink>
            </li>
            <li>
                <NavLink to="/diagnostico">Diagnostico</NavLink>
            </li>
            <li>
                <NavLink to="/tratamiento">Tratamiento</NavLink>
            </li>
            <li>
                <NavLink to="/login">Iniciar sesión</NavLink>
            </li>
            <li>
                <NavLink to="/register">Registrarse</NavLink>
            </li>
            <li>
                <div className='user'>
                    <span className='username'>Pedro</span>
                </div>
            </li>
            <li>
                <button>Cerrar sesión</button>
            </li>
        </ul>
    </nav>
  )
}
