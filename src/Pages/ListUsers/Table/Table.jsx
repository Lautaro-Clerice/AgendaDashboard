import React, { useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../Axios/AxiosUsuarios';
const Table = () => {
  const {clientes, error} = useSelector(state => state.usuariosClientes);
  const dispatch = useDispatch()
  useEffect(() => {
    if (!clientes) {
      getUser(dispatch)
    }
  },[dispatch, clientes, error])

  const columns = [
    { headerName: 'Nombre', field: 'name', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Celular', field: 'telefono', sortable: true, filter: true },
  ];


  return (
    <div className="ag-theme-material" style={{ height: '500px', width: '100%', }}>
      <AgGridReact
        rowData={clientes}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
        rowHeight={60}
        
      />
    </div>
  );
};

export default Table;
