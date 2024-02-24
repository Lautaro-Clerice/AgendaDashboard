import axios from "axios";
import { BASE_URL } from "../Utils/Constant";

export const CreateTurnosLibres = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}turnos/TLibres`, formData);
      console.log('Turnos generados con éxito:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al generar los turnos:', error);
      throw error;
    }
  };
  