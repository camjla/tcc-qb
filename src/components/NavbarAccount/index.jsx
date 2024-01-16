import { Container, TitleNav } from "./navbarAccount.styles"
import { Color } from '../../utils/colors.app'
import Back from '../../assets/back.svg'




export const NavbarAccount = () => {

  return (
    <Container>
      <img width='20px' height='20px' flex-shrink='0' src={Back} alt='Arrow' />
      <TitleNav>Conta</TitleNav>
    </Container>
  )
}