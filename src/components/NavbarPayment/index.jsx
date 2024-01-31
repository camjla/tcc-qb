import { Container, TitleNav } from "./navbarPayment.styles"

import Back from '../../assets/back.svg'




export const NavbarPayment = () => {

  return (
    <Container>
      <img width='20px' height='20px' flex-shrink='0' src={Back} alt='Arrow' />
      <TitleNav>Pagamento</TitleNav>
    </Container>
  )
}