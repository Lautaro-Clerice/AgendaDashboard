import React from 'react'
import { FooterStyles, HomeContainer, OptionsDBPadre, OptionsDashboard, TitlePrincipal } from '../Home/HomeStyles'
import { ListUserContainer, UsersContainer } from './ListUserStyles'
import Table from './Table/Table'

const ListUser = () => {
  return (
    <>
        <ListUserContainer>
            <HomeContainer>
                <TitlePrincipal>
                    Usuarios registrados
                </TitlePrincipal>
                <OptionsDBPadre>
                    <OptionsDashboard>

                    </OptionsDashboard>
                    <OptionsDashboard>
                        
                    </OptionsDashboard>
                    <OptionsDashboard>
                        
                    </OptionsDashboard>
                </OptionsDBPadre>
                <UsersContainer>
                    <Table/>
                </UsersContainer>
                <FooterStyles>
                    © ClericeDev. 2024 Webinning.
                </FooterStyles>
            </HomeContainer>
        </ListUserContainer>
    </>
  )
}

export default ListUser