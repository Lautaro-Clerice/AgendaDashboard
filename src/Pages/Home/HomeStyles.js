import styled from "styled-components";
import {ColorTitulo, colorShadow, colorTextoTemplado} from '../../UX/UI/colorsDashboard'
export const GralContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #F1F5F7;
    overflow-y: auto;
`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: end;
    width: 83%;
    height: auto;
    @media(max-width:900px){
        width: 100%;
        align-items: center;
    }
`

export const TitlePrincipal = styled.h1`
    font-size: 22px;
    margin-top: 40px;
    color: ${ColorTitulo};
    @media(max-width:900px){
        margin-top: 80px;
        align-self: start;
        margin-left: 5%;
    }
`

export const OptionsDashboard = styled.div`
    width: 300px;
    background-color: white;
    height: 120px;
    box-shadow: 3px 3px 6px ${colorShadow};
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:900px){
        width: 90%;
    }

`
export const OptionsDBPadre = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    width: 90%;
    @media(max-width:900px) {
       flex-wrap:wrap; 
    }
    
`

export const AnalisisPadre = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    width: 90%;
    margin-top: 30px;
    
    @media(max-width:900px){
        width: 100%;
        flex-wrap: wrap;
    }
`
export const AnalisisTurnos = styled.div`
    width: 55%;
    height: 400px;
    background-color: white;
    box-shadow: 3px 3px 6px ${colorShadow};
    border-radius: 11px;
    @media(max-width:900px){
        width: 90%;
    }

`

export const TopClientes = styled.div`
    width: 45%;
    height: 400px;
    background-color: white;
    box-shadow: 3px 3px 6px ${colorShadow};
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    h2 {
        margin-left: 20px;
        font-size: 17px;

        font-weight: 700;
    }
      @media(max-width:900px){
        width: 90%;
    }

`

export const FooterStyles = styled.footer`
    justify-self: start;
    font-size: 16px;
    color: ${colorTextoTemplado};
    margin-top: 40px;
    margin-left: 40px;
    margin-bottom: 20px;

`

export const DatosHome  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 58%;
    gap: 0;
    .icon{
        color: #6ee750;
    }
    p{
        color: ${colorTextoTemplado};
        margin: 0;
        font-size: 16px;
    }
    h2{
        margin: 0;
    }
    .texto{
        font-size: 14px;
    }


`
export const IconsHome  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    img{
        width: 40px;
        height: 40px;
    }
`


export const EncabezadoTop = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #bababa17;
    p{
        color: ${colorTextoTemplado};
        font-size: 15px;
    }
    
`   

export const ClientesXturnos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    .turnos{
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background-color: lightgreen;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    p{
        width: 100px;
        display: flex;
        gap: 20px;
    }
`
export const HrStyled =styled.hr`
    width: 85%;
    border: 1px solid  #bababa36;
`