import styled from "styled-components";
import {ColorTitulo, colorShadow, colorTextoTemplado} from '../../UX/UI/colorsDashboard'
export const GralContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #F1F5F7;
`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: end;
    width: 83%;
    height: auto;
    
`

export const TitlePrincipal = styled.h1`
    font-size: 22px;
    margin-top: 40px;
    color: ${ColorTitulo};
`

export const OptionsDashboard = styled.div`
    width: 250px;
    background-color: white;
    height: 120px;
    box-shadow: 0px 0px 8px ${colorShadow};
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const OptionsDBPadre = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    width: 90%;
`

export const AnalisisPadre = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    width: 90%;
    margin-top: 30px;
`
export const AnalisisTurnos = styled.div`
    width: 55%;
    height: 400px;
    background-color: white;
    box-shadow: 0px 0px 8px ${colorShadow};
    border-radius: 11px;

`

export const TopClientes = styled.div`
    width: 45%;
    height: 400px;
    background-color: white;
    box-shadow: 0px 0px 8px ${colorShadow};
    border-radius: 11px;
`

export const FooterStyles = styled.footer`
    justify-self: start;
    font-size: 16px;
    color: ${colorTextoTemplado};
    margin-top: 40px;
    margin-left: 40px;

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