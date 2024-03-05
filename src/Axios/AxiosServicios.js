import axios from "axios";
import { BASE_URL } from "../Utils/Constant";
import {fetchserviciosStart, fetchserviciosSuccess, fetchserviciosFail} from '../Redux/Slices/ServiciosSlice'

export const CreateServices = async (formData) => {

    try {
        const addServ = await axios.post(`${BASE_URL}servicios`)
        console.log('Servicio creado', addServ.data);
        return addServ.data
    } catch (error) {
        console.error('Error al generar el servicio', error);
      throw error;
    
    }
}


export const getServicios = async (dispatch) => {
    fetchserviciosStart()
    try {
        const servicios = await axios.get(`${BASE_URL}servicios`)
        console.log(servicios);
        if(servicios){
            dispatch(fetchserviciosSuccess(servicios.data.data))
        }
    } catch (error) {
        console.log(error);
        fetchserviciosFail('Algo salio mal')
    }
}