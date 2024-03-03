import React from 'react'
import { HrStyled, ListOptions, LogoNavbar, NavbarContainer, Options, OptionsPadre } from './NavbarStyles'
import logo from '../../Imagenes/logo-dark.png'
import Agenda from '../../Imagenes/calendar-01.svg'
import Dashboard from '../../Imagenes/dashboard.svg'
import User from '../../Imagenes/user.svg'
import add from '../../Imagenes/AddTurn.svg'
import config from '../../Imagenes/Config.svg'
import out from '../../Imagenes/logout.svg'
import services from '../../Imagenes/services.svg'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate();

  return (
    <>
        <NavbarContainer>
            <OptionsPadre>
                <LogoNavbar>
                    <img src={logo} alt="logo" />
                </LogoNavbar>
                <ListOptions>
                    <Options onClick={() => navigate('/')}>
                        <img src={Dashboard} alt='dashboard'/>
                        <p>Dashboard</p>
                    </Options>
                    <Options onClick={() => navigate('/turnos')} >
                        <img src={Agenda} alt="calendar" />
                        <p>Turnos pendientes</p>
                    </Options>
                    <Options onClick={() => navigate('/users')}>
                        <img src={User} alt="user" />
                        <p>Lista de usuarios</p>
                    </Options>
                    <Options onClick={() => navigate('/agregarTurnos')}>
                        <img src={add} alt="turnos" />
                        <p>Agregar turnos</p>
                    </Options>
                    <Options onClick={() => navigate('/servicios')}>
                        <img src={services} alt="servicios" />
                        <p>Servicios</p>
                    </Options>  
                      
                </ListOptions>
                <HrStyled/>
                <ListOptions>
                    <Options>
                        <img src={config} alt="config" />
                        <p>Ajustes</p>
                    </Options> 
                    <Options>
                        <img src={out} alt="Logout" />
                        <p>Cerrar sesion</p>  
                    </Options> 
                </ListOptions>
            </OptionsPadre>
                
        </NavbarContainer>
    </>
  )
}

export default Navbar