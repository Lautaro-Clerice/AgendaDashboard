import React from 'react'
import { GralContainer, HomeContainer, TitlePrincipal } from '../Home/HomeStyles'
import { UsersContainer } from '../ListUsers/ListUserStyles'
import TableTurnos from './TableTurnos'
import { Subtitle } from './TurnosStyles'
const Turnos = () => {
  return (
    <>
        <GralContainer>
            <HomeContainer>
                <TitlePrincipal>
                    Tus turnos
                </TitlePrincipal>
                <Subtitle>
                    <p>Revisa los turnos pendientes</p>
                </Subtitle>
                <UsersContainer>
                    <TableTurnos/>
                </UsersContainer>
            </HomeContainer>
        </GralContainer>
    </>
  )
}

export default Turnos