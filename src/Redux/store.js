import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import clientesReducer from './Slices/TurnosSlices'
import userReducer from './Slices/TurnosObtenidosSlice'
import turnoConfirmadoReducer from './Slices/TurnoConfirmado'
import turnoClienteReducer from './Slices/ObtenerTurnos'
import empleadosReducer from './Slices/EmpleadosSlice'
import serviciosReducer from './Slices/ServiciosSlice'
const reducers = combineReducers({
    usuariosClientes: clientesReducer,
    user: userReducer,
    turnoConfirmado: turnoConfirmadoReducer,
    turnosLibres: turnoClienteReducer, 
    listaEmpleados: empleadosReducer,
    servicios: serviciosReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  })
});

const persistor = persistStore(store);

export { store, persistor };
