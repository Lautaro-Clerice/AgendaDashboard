import axios from "axios"
import { fetchClientesFail, fetchClientesStart, fetchClientesSuccess } from "../Redux/Slices/TurnosSlices"
import { BASE_URL } from "../Utils/Constant"


export const getUser = async (dispatch) => {
    fetchClientesStart()

    try {
        const clientes = await axios.get(`${BASE_URL}auth/usuarioscreados`)
        console.log(clientes);
        if(clientes){
            dispatch(fetchClientesSuccess(clientes.data.data))
        }
    } catch (error) {
        console.log(error);
        fetchClientesFail('Algo salio mal')
    }
}