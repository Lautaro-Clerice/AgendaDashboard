import styled from "styled-components";
import { colorShadow } from "../../UX/UI/colorsDashboard";


export const UsersContainer = styled.div`
align-self: center;
    margin-top: 40px;
    overflow: auto;
    width: 80%;
    height: 500px;
    background-color: white;
    box-shadow: 0px 0px 8px ${colorShadow};
    border-radius: 11px;
`

export const ListUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #F1F5F7;
    overflow: auto;
`
