import React, { useEffect, useState } from 'react';
import { GralContainer, HomeContainer, TitlePrincipal } from '../Home/HomeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { CreateServices, getServicios } from '../../Axios/AxiosServicios';

const Servicios = () => {
  const { empleados, error } = useSelector(state => state.listaEmpleados);
  const dispatch = useDispatch();
  useEffect(() => {
    getServicios(dispatch);
  }, [dispatch]);
  
  const [formData, setFormData] = useState({
    servicio: '',
    precio: '',
    profesional: [],
  });
  
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith('profesional')) {
      const updatedProfesional = [...formData.profesional];
      updatedProfesional[index] = value;
      setFormData(prevState => ({
        ...prevState,
        profesional: updatedProfesional
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleAddProfesional = () => {
    if (formData.profesional.length === empleados.length) return;
    
    setFormData(prevState => ({
      ...prevState,
      profesional: [...prevState.profesional, '']
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    CreateServices(formData)
  };

  return (
    <>
      <GralContainer>
        <HomeContainer>
          <TitlePrincipal>
            Agregar servicio
          </TitlePrincipal>
          <div>
            <form onSubmit={handleSubmit}>
              <label>Servicio:</label>
              <input type="text" name="servicio" value={formData.servicio} onChange={handleChange} required /><br />

              <label>Precio</label>
              <input type="number" name="precio" value={formData.precio} onChange={handleChange} required /><br />

              <label>Profesional:</label><br />
              {formData.profesional.map((value, index) => (
                <select key={index} name={`profesional${index}`} value={value} onChange={(e) => handleChange(e, index)} required>
                  <option value="">Seleccione un profesional</option>
                  {empleados.map((empleado) => (
                    <option key={empleado.id} value={empleado.nombre}>{empleado.nombre}</option>
                  ))}
                </select>
              ))}
              <button type="button" onClick={handleAddProfesional}>+</button><br />

              <button type="submit">Cargar Turnos</button>
            </form>
          </div>
        </HomeContainer>
      </GralContainer>
    </>
  );
};

export default Servicios;
