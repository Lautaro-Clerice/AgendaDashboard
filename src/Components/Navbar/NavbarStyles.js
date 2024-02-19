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

`
export const OptionsPadre = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 40px;
`
export const LogoNavbar = styled.div`
    width: 90% ;
    
`

export const ListOptions = styled.ul`
    display: flex; 
    flex-direction: column;
    gap: 10px;
    width: 100%;
    list-style: none;

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
`

export const HrStyled = styled.hr`
    width: 95%;
    justify-self: center;
    border: 1px solid ${colorTextoTemplado};
`