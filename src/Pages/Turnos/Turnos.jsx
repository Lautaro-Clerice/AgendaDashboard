import React from 'react'
import { GralContainer, HomeContainer, TitlePrincipal } from '../Home/HomeStyles'
import { UsersContainer } from '../ListUsers/ListUserStyles'
import TableTurnos from './TableTurnos'
const Turnos = () => {
  return (
    <>
        <GralContainer>
            <HomeContainer>
                <TitlePrincipal>
                    Tus turnos
                </TitlePrincipal>
                <UsersContainer>
                    <TableTurnos/>
                </UsersContainer>
            </HomeContainer>
        </GralContainer>
    </>
  )
}

export default Turnos