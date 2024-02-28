import styled from "styled-components";
import { colorTextoTemplado } from "../../UX/UI/colorsDashboard";


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
    input {
        width: 20%;
    }
`