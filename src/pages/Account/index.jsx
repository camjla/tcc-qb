
import React from 'react'
import { NavbarAccount } from '../../components/NavbarAccount'
import { Container, Wrapper } from "./account.styles"
import { Menu } from "../../components/Menu"
import { ListOptions } from '../../components/ListOptions'
import { ProfilePhoto } from '../../components/ProfilePhoto'
import { Support } from '../../components/Support'

export const Account = () => {

  return (

    <Container>
      <NavbarAccount />

      <Wrapper>
        <ProfilePhoto />
        <ListOptions />
        <Support />
      </Wrapper>

      <Menu />
    </Container>
  )
}

