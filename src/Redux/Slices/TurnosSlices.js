import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  clientes: null,
  loading: false,
  error: null,
};

const clientesSlice = createSlice({
  name: 'clientes',
  initialState: INITIAL_STATE,
  reducers: {
    createClienteFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    fetchClientesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        clientes: [...action.payload],
      };
    },
    fetchClientesFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchClientesStart: state => {
      return {
        ...state,
        loading: true,
      };
    },
    clearClientesError: state => {
      return {
        ...state,
        error: null,
      };
    },
    clearCLientes: state => {
      return {
        ...state,
        clientes: null,
      };
    },
  },
});

export const {
  createClienteFail,
  fetchClientesSuccess,
  fetchClientesFail,
  fetchClientesStart,
  clearClientesError,
  clearCLientes
} = clientesSlice.actions;

export default clientesSlice.reducer;