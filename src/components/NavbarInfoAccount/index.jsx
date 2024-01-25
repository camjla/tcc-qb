import { Container, TitleNav } from "./navbarInfoAccount.styles"
import { Color } from '../../utils/colors.app'
import Back from '../../assets/back.svg'




export const NavbarInfoAccount = () => {

  return (
    <Container>
      <img width='20px' height='20px' flex-shrink='0' src={Back} alt='Arrow' />
      <TitleNav>Informação da conta</TitleNav>
    </Container>
  )
}