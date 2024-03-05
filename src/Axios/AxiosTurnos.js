import axios from 'axios';
import {BASE_URL} from '../Utils/Constant'
import {fetchturnosFail, fetchturnosStart, fetchturnosSuccess } from '../Redux/Slices/ObtenerTurnos';

export const GetTurnosLibres = async (dispatch) => {
    fetchturnosStart()

    try {
        const turnosLibres = await axios.get(`${BASE_URL}turnos/turnocliente`)
        console.log(turnosLibres);
        if(turnosLibres){
            dispatch(fetchturnosSuccess(turnosLibres.data.data))
        }
    } catch (error) {
        console.log(error);
        fetchturnosFail('Algo salio mal')

    }
}

export const FinalizarTurno = async (id) => {

    try {
        const cambio = await axios.patch(`${BASE_URL}turnos/turnosTomados/${id}`);
        console.log("Respuesta del servidor:", cambio.data);
    } catch (error) {
        console.log(error);
    }
}

export const AddPendienteTurno = async (id) => {

    try {
        const cambio = await axios.put(`${BASE_URL}turnos/turnosTomados/${id}`);
        console.log("Respuesta del servidor:", cambio.data);
    } catch (error) {
        console.log(error);
    }
}
