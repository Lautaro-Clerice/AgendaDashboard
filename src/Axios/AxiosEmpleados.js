import axios from "axios";
import { BASE_URL } from "../Utils/Constant";

export const getEmpleados= async (dispatch) => {
    fetchempleadosStart()
    try {
        const empleados = await axios.get(`${BASE_URL}empleados`)
        console.log(empleados);
        if(empleados){
            dispatch(fetchempleadosSuccess(empleados.data.data))
        }
    } catch (error) {
        console.log(error);
        fetchempleadosFail('Algo salio mal')
    }
}