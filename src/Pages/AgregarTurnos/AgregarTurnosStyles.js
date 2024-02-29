import styled from "styled-components";
import { ColorTitulo, colorShadow, colorTextoTemplado } from "../../UX/UI/colorsDashboard";


export const CargarDatosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    p{
        color: ${colorTextoTemplado};
    }

`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    input {
        width: 20%;
    }
    button {
        width: 40%;
        height: 40px;
        border: none;
        background-color: #43a2ef ;
        color: white;
        border-radius: 10px;
        margin-bottom: 20px;
    }
`

export const FechaContainer = styled.div`
    background-color: white;
    width: 30%;
    height: 150px;
    border: 1px solid ${colorShadow};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 25px;
    box-shadow: 0px 0px 7px ${colorShadow};
    label {
        font-weight: 600;
        font-size:16px;
    }
    p{
        color:${colorTextoTemplado};
        margin-top: 2px;
    }
    input {
        border:1px solid ${colorShadow};
        width: 38%;
        height: 40px;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 10px;
        font-family: sans-serif;
        font-weight: 300;
    }
`

export const TurnosContainer = styled.div`
     background-color: white;
    width: 30%;
    height: auto;
    border: 1px solid ${colorShadow};
    border-radius: 10px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 25px;
    box-shadow: 0px 0px 7px ${colorShadow};
    label {
        font-weight: 600;
        font-size:16px;
    }
    p{
        color:${colorTextoTemplado};
        margin-top: 2px;
    }
    input {
        border:1px solid ${colorShadow};
        width: 38%;
        height: 40px;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 10px;
        font-family: sans-serif;
        font-weight: 300;
    }
    select {
        border:1px solid ${colorShadow};
        width: 60%;
        height: 40px;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 10px;
        font-family: sans-serif;
        font-weight: 300;
        margin-bottom:30px;
    }
    option {
        border:1px solid ${colorShadow};
        width: 60%;
        height: 40px;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 10px;
        font-family: sans-serif;
        font-weight: 300;
    }
`