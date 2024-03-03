import React, { useState } from 'react'
import { ListOptions, LogoNavbar, MenuHamburguesa, NavbarContainer, Options, OptionsPadre } from './NavbarStyles'
import logo from '../../Imagenes/logo-dark.png'
import Agenda from '../../Imagenes/calendar-01.svg'
import Dashboard from '../../Imagenes/dashboard.svg'
import User from '../../Imagenes/user.svg'
import add from '../../Imagenes/AddTurn.svg'
import config from '../../Imagenes/Config.svg'
import out from '../../Imagenes/logout.svg'
import services from '../../Imagenes/services.svg'
import {useNavigate} from 'react-router-dom'
import burger from '../../Imagenes/burger.svg'
import { useDispatch } from 'react-redux'
const Navbar = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleNavList = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (path) => {
        if (window.innerWidth <= 900) {
            setIsOpen(false)
            navigate(path)
        }
    }
  return (
    <>
        <NavbarContainer>
            <OptionsPadre>
                <MenuHamburguesa src={burger} alt="burger" onClick={handleNavList}/>
                <LogoNavbar>
                    <img src={logo} alt="logo" />
                </LogoNavbar>
                
            </OptionsPadre>
            <ListOptions className={isOpen ? 'transition' : ''} style={{ display: isOpen ? 'flex' : 'none', opacity:isOpen ? '1' : '0', }}>
                    <Options onClick={() => handleOptionClick('/')}>
                        <img src={Dashboard} alt='dashboard'/>
                        <p>Dashboard</p>
                    </Options>
                    <Options onClick={() => handleOptionClick('/turnos')} >
                        <img src={Agenda} alt="calendar" />
                        <p>Turnos pendientes</p>
                    </Options>
                    <Options onClick={() => handleOptionClick('/users')}>
                        <img src={User} alt="user" />
                        <p>Lista de usuarios</p>
                    </Options>
                    <Options onClick={() => handleOptionClick('/agregarTurnos')}>
                        <img src={add} alt="turnos" />
                        <p>Agregar turnos</p>
                    </Options>
                    <Options onClick={() => navigate('/servicios')}>
                        <img src={services} alt="servicios" />
                        <p>Servicios</p>
                    </Options>  
                      
                    <Options>
                        <img src={config} alt="config" />
                        <p>Ajustes</p>
                    </Options> 
                    <Options>
                        <img src={out} alt="Logout" />
                        <p>Cerrar sesion</p>  
                    </Options> 
                </ListOptions>
        </NavbarContainer>
    </>
  )
}

export default Navbar