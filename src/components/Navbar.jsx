import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom';

import "./Navbar.css"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        </ul>
    </nav>
  )
}
