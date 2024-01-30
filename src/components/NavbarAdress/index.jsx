import { Container, TitleNav } from "./navbarAdress.styles"

import Back from '../../assets/back.svg'




export const NavbarAdress = () => {

  return (
    <Container>
      <img width='20px' height='20px' flex-shrink='0' src={Back} alt='Arrow' />
      <TitleNav>Endereço</TitleNav>
    </Container>
  )
}