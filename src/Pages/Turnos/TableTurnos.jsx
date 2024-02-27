import React, { useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import {useDispatch, useSelector} from 'react-redux'
import { GetTurnosLibres } from '../../Axios/AxiosTurnos';
import { clearturnos } from '../../Redux/Slices/ObtenerTurnos';
const TableTurnos = () => {
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
  
  const localeText = {
    noRowsToShow: 'No hay turnos pedidos en este momento' 
  };

  const columns = [
    { headerName: 'Usuario', field: 'name', sortable: true, filter: true },
    { headerName: 'Teléfono', field: 'telefono', sortable: true, filter: true },
    { headerName: 'Fecha', field: 'fecha', sortable: true, filter: true },
    { headerName: 'Horario', field: 'horario', sortable: true, filter: true },
    { headerName: 'Estado', field: 'status', sortable: true, filter: true },
    { headerName: 'Servicio', field: 'servicio', sortable: true, filter: true },
    { headerName: 'Empleado', field: 'empleado', sortable: true, filter: true },
  ];


  return (
    <div className="ag-theme-material" style={{ height: '500px', width: '100%' }}>
      <AgGridReact
        rowData={turnos}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
        localeText={localeText}
      />
    </div>
  );
};

export default TableTurnos;
