import React, { useEffect, useState } from 'react'
import {AnalisisPadre, AnalisisTurnos, DatosHome, FooterStyles, GralContainer, HomeContainer, IconsHome, OptionsDBPadre, OptionsDashboard, TitlePrincipal, TopClientes} from './HomeStyles'
import { GetTurnosLibres } from '../../Axios/AxiosTurnos';
import { useDispatch, useSelector } from 'react-redux';
import agenda from '../../Imagenes/agendaHome.svg'
import { FaArrowTrendUp } from "react-icons/fa6";
import { clearturnos } from '../../Redux/Slices/ObtenerTurnos';
import dinero from '../../Imagenes/Dinero.svg'
const Home = () => {
  const { turnos, error } = useSelector(state => state.turnosLibres);
  const dispatch = useDispatch(); 
  const [turnosDelMes, setTurnosDelMes] = useState([]);
  const [dineroDelMes, setDineroDelMes] = useState([]);
  const [clientesDelMes, setClientesDelMes] = useState([])


  

  useEffect(() => {
    if (!turnos) {
      GetTurnosLibres(dispatch);
    } else {
      const mesActual = new Date().getMonth() + 1;
      const turnosMesActual = turnos.filter(turno => {
        const mesTurno = new Date(turno.fecha).getMonth() + 1;
        return mesTurno === mesActual;
      });
  
      setTurnosDelMes(turnosMesActual);
      const dineroRecaudado = turnosMesActual
        .filter(turno => turno.status === "Finalizado" && turno.precio)
        .reduce((total, turno) => {
        const precioLimpio = parseFloat(turno.precio.replace(/\$|,/g, ''));
        return (total + precioLimpio);
      }, 0);

setDineroDelMes(dineroRecaudado);
    
    }
  }, [turnos, error, dispatch]);


  useEffect(() => {
    dispatch(clearturnos());
  }, []);


  return (
    <>
    <GralContainer>
      <HomeContainer>
        <TitlePrincipal>
          Dashboard
        </TitlePrincipal>
      <OptionsDBPadre>

        <OptionsDashboard>
          <DatosHome>
            <p><FaArrowTrendUp className='icon'/> Este mes</p>
            {turnos && <h2>{turnosDelMes.length}</h2>}
            <p className='texto'>Turnos tomados</p>
          </DatosHome>
          <IconsHome>
            <img src={agenda} alt="iconCalendar" />
          </IconsHome>
        
        </OptionsDashboard>

        <OptionsDashboard>
        <DatosHome>
            <p><FaArrowTrendUp className='icon'/> Este mes</p>
            {turnos && <h2>${dineroDelMes}</h2>}
            <p className='texto'>Dinero recaudado</p>
          </DatosHome>
          <IconsHome>
            <img src={dinero} alt="iconCalendar" />
          </IconsHome>
        </OptionsDashboard>

        <OptionsDashboard>
        <DatosHome>
            <p><FaArrowTrendUp className='icon'/> Este mes</p>
            {turnos && <h2>${dineroDelMes}</h2>}
            <p className='texto'>Dinero recaudado</p>
          </DatosHome>
          <IconsHome>
            <img src={dinero} alt="iconCalendar" />
          </IconsHome>
        </OptionsDashboard>

        <OptionsDashboard>

        </OptionsDashboard>

      </OptionsDBPadre>

      <AnalisisPadre>

        <AnalisisTurnos>

        </AnalisisTurnos>
        
        <TopClientes>

        </TopClientes>

      </AnalisisPadre>
      <FooterStyles>
      © ClericeDev. 2024 Webinning.
      </FooterStyles>
      </HomeContainer>
      
    </GralContainer>
    </>
  )
}

export default Home