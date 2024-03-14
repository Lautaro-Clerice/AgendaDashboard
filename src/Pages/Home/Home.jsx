import React, { useEffect, useState } from 'react'
import {AnalisisPadre, AnalisisTurnos, ClientesXturnos, DatosHome, EncabezadoTop, FooterStyles, GralContainer, HomeContainer, HrStyled, IconsHome, OptionsDBPadre, OptionsDashboard, TitlePrincipal, TopClientes} from './HomeStyles'
import { GetTurnosLibres } from '../../Axios/AxiosTurnos';
import { getUser } from '../../Axios/AxiosUsuarios';
import { useDispatch, useSelector } from 'react-redux';
import agenda from '../../Imagenes/agendaHome.svg'
import { FaArrowTrendUp } from "react-icons/fa6";
import { clearturnos } from '../../Redux/Slices/ObtenerTurnos';
import dinero from '../../Imagenes/Dinero.svg'
import user from '../../Imagenes/userDashboard.svg'
import topClient from '../../Imagenes/Top.svg'
const Home = () => {
  const { turnos, error } = useSelector(state => state.turnosLibres);
  const cliente = useSelector(state => state.usuariosClientes.clientes);
  const errorCliente = useSelector(state => state.usuariosClientes.error);
  const dispatch = useDispatch(); 
  const [turnosDelMes, setTurnosDelMes] = useState([]);
  const [dineroDelMes, setDineroDelMes] = useState([]);
  const [clientesDelMes, setClientesDelMes] = useState([])
  useEffect(() => {
    dispatch(clearturnos());
    getUser(dispatch);
  }, []);

  useEffect(() => {
    if (!cliente) {
      getUser(dispatch)
    } else {
      const mesActual = new Date().getMonth() + 1;
      const usuariosMesActual = cliente.filter(client =>{
        const mesCliente = new Date(client.createdAt).getMonth() + 1;
      return mesCliente === mesActual;
      });
      setClientesDelMes(usuariosMesActual.length);
    }
  },[dispatch, cliente, errorCliente])

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

      const clientesActuales = turnosMesActual.filter(turno => turno)

setDineroDelMes(dineroRecaudado);
    
    }
  }, [turnos, error, dispatch]);


  


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
            {cliente && <h2>{clientesDelMes}</h2>}
            <p className='texto'>Clientes nuevos</p>
          </DatosHome>
          <IconsHome>
            <img src={user} alt="iconCalendar" />
          </IconsHome>
        </OptionsDashboard>

      </OptionsDBPadre>

      <AnalisisPadre>

        <AnalisisTurnos>

        </AnalisisTurnos>
        
        <TopClientes>
          <h2>TOP CLIENTES</h2>
          <EncabezadoTop>
            <p>Cliente</p>
            <p>Turnos</p>
          </EncabezadoTop>
          {cliente && cliente.map(cliente => ({
            cliente,
            turnos: turnos ? turnos.filter(turno => turno.email === cliente.email).length : 0
          }))
          .sort((a, b) => b.turnos - a.turnos) 
          .map(({ cliente, turnos }) => (
            <>
            <ClientesXturnos key={cliente.email}>
              <p><img src={topClient} alt="clientestop"/>{cliente.name}</p>
              <div className='turnos'>{turnos}</div>

            </ClientesXturnos>
            <HrStyled/>
            </>
          ))}
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