
import React from 'react'
import { InitialPage} from '../../components/InitialPage'
import { Menu} from '../../components/Menu'
import { Container } from "./home.styles"


export const Home = () => {
 
  return(
    
    <Container>
      <InitialPage />
      <Menu />
      </Container>
  )
}

