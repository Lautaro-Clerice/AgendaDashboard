import styled from "styled-components";
import {backgroundPrincipal, colorIcons, colorTextoTemplado} from '../../UX/UI/colorsDashboard'

export const NavbarContainer = styled.div`
    background-color: ${backgroundPrincipal};
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    position: fixed;
    z-index: 100000;
    @media(max-width:900px){
        height: auto;
        width: 100%;
        gap: 0px;
    }
`
export const OptionsPadre = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 40px;
    @media (max-width:900px){
        width: 100%;
        flex-direction: initial;
        display: flex;
        align-items: center;
        margin-top: 0;
        gap: initial;
        justify-content: space-between;
        padding: 0 10px 0 30px;
        height: 70px;
    }
`
export const LogoNavbar = styled.div`
    width: 90% ;
    @media (max-width:900px){
        width: 140px;
    }
`

export const ListOptions = styled.ul`
    display: flex; 
    flex-direction: column;
    gap: 10px;
    width: 100%;
    list-style: none;
    @media (max-width:900px){
        background-color: ${backgroundPrincipal};
        margin-top: 0;
        margin-bottom: 0;
        height: 900px;
        gap: 20px;
        margin-top: 30px;
        display: none;
        transition: .1s;
        opacity: 0;
    }
    
`

export const Options = styled.li`
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    transition: .2s;
    p{
        color: ${colorTextoTemplado};
        &:hover{
            color: ${colorIcons};
        }
    }
    font-weight: 500;
    @media (max-width:900px){
        img{
            width:30px;
            height: 30px;
        }
    }
`

export const HrStyled = styled.hr`
    width: 95%;
    justify-self: center;
    border: 1px solid ${colorTextoTemplado};
    @media (max-width:900px){
        display: none;
    }
`

export const MenuHamburguesa = styled.img`
    width: 40px;
    height: 40px;
`