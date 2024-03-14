import styled from "styled-components";
import { colorShadow } from "../../UX/UI/colorsDashboard";



export const ServiciosContainer = styled.div`
     width: 80%;
    height: 400px;
    background-color: white;
    box-shadow: 3px 3px 6px ${colorShadow};
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const OptionsServicios = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    width: 100%;
    p{
        width: 25%;
        text-align: center;
    }
`