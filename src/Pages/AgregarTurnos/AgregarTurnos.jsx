import React, { useEffect, useState } from 'react';
import { FooterStyles, GralContainer, HomeContainer, TitlePrincipal } from '../Home/HomeStyles';
import { CreateTurnosLibres } from '../../Axios/AxiosLibres';
import {getEmpleados} from '../../Axios/AxiosEmpleados'
import { useDispatch, useSelector } from 'react-redux'
import { CargarDatosContainer, FechaContainer, FormContainer, TurnosContainer } from './AgregarTurnosStyles';
import Loader from '../../UX/UI/Loader/Loader'
const AgregarTurnos = () => {
    const [loading, setLoading] = useState(false);
    const {empleados, error} = useSelector(state => state.listaEmpleados);
    const dispatch = useDispatch();
    useEffect(() => {
        if(!empleados){
          getEmpleados(dispatch)
        }
      }, [empleados, error, dispatch])
  const [formData, setFormData] = useState({
    fecha: '',
    horaInicio: '',
    horaCierre: '',
    intervalo: '',
    empleado: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    const { fecha, horaInicio, horaCierre, intervalo, empleado } = formData;
    const turnos = generateTurnos(fecha, horaInicio, horaCierre, intervalo, empleado);
    
    try {
      for (const turno of turnos) {
        console.log(turno);
        await CreateTurnosLibres(turno);
        
      }
      alert('Turnos cargados exitosamente');
      
    } catch (error) {
      console.error('Error al cargar los turnos:', error);
      alert('Error al cargar los turnos. Por favor, inténtalo de nuevo.');
      setLoading(false);
    }
  };
  

  const generateTurnos = (fecha, horaInicio, horaCierre, intervalo, empleado) => {
    const turnos = [];
    let horaActual = horaInicio;
  
    while (horaActual <= horaCierre) {
      turnos.push({ fecha, horario: horaActual, empleado });
  
      const [hh, mm] = horaActual.split(':');
      let minutos = parseInt(mm) + parseInt(intervalo);
      let horas = parseInt(hh);
  
      if (minutos >= 60) {
        horas += Math.floor(minutos / 60);
        minutos %= 60;
      }
  
      horaActual = `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}`;
    }
  
    return turnos;
  };
  
  

  return (
    <>
      <GralContainer>
        <HomeContainer>
          <TitlePrincipal>
            Agregar turnos
          </TitlePrincipal>
          <CargarDatosContainer>
            <p>Abri tus agendas del dia completo!</p>
            <FormContainer onSubmit={handleSubmit}>
              <FechaContainer>
                <label>Selecciona una fecha</label>
                <p>Elegi el dia que quieras abrir tu agenda</p>
                <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required /><br />
              </FechaContainer>
              
              <TurnosContainer>
              <label>Hora de Inicio:</label>
              <input type="time" name="horaInicio" value={formData.horaInicio} onChange={handleChange} required /><br />

              <label>Hora de Cierre:</label>
              <input type="time" name="horaCierre" value={formData.horaCierre} onChange={handleChange} required /><br />

              <label>Intervalo entre turnos (en minutos):</label>
              <input type="number" name="intervalo" value={formData.intervalo} onChange={handleChange} required /><br />

              <label>Empleado:</label>
              <select name="empleado" value={formData.empleado} onChange={handleChange} required>
                <option value="">Seleccionar empleado</option>
                {empleados && empleados.map((empleado) => (
                  <option key={empleado.id} value={empleado.id}>{empleado.nombre}</option>
                ))}

                </select>

              <button type="submit">
                {
                  loading ? (
                    <Loader/>
                  ) : (
                    'Cargar turnos'
                  )
                }</button>
              </TurnosContainer>
            </FormContainer>
          </CargarDatosContainer>
          <FooterStyles>
            © ClericeDev. 2024 Webinning.
          </FooterStyles>
        </HomeContainer>
      </GralContainer>
    </>
  );
};

export default AgregarTurnos;
