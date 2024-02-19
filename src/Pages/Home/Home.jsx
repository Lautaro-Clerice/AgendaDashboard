import React, { useEffect } from 'react'
import {AnalisisPadre, AnalisisTurnos, DatosHome, FooterStyles, GralContainer, HomeContainer, IconsHome, OptionsDBPadre, OptionsDashboard, TitlePrincipal, TopClientes} from './HomeStyles'
import { GetTurnosLibres } from '../../Axios/AxiosTurnos';
import { useDispatch, useSelector } from 'react-redux';
import agenda from '../../Imagenes/agendaHome.svg'
import { FaArrowTrendUp } from "react-icons/fa6";
import { clearturnos } from '../../Redux/Slices/ObtenerTurnos';
const Home = () => {
  const {turnos, error} = useSelector(state => state.turnosLibres)
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(clearturnos());
  }, []);
  useEffect(() => {
    if (!turnos) {
      GetTurnosLibres(dispatch);
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
            {turnos && <h2>{turnos.length}</h2>}
            <p className='texto'>Turnos tomados</p>
          </DatosHome>
          <IconsHome>
            <img src={agenda} alt="iconCalendar" />
          </IconsHome>
        
        </OptionsDashboard>

        <OptionsDashboard>

        </OptionsDashboard>

        <OptionsDashboard>

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