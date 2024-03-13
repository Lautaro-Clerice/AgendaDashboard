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
  

  return (
    <>
      <GralContainer>
        <HomeContainer>
          <TitlePrincipal>
            Agregar servicio
          </TitlePrincipal>
        </HomeContainer>
      </GralContainer>
    </>
  );
};

export default Servicios;
