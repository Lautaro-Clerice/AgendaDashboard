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
