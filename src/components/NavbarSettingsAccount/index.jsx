import { Container, TitleNav } from "./navbarSettingsAccount.styles"
import { Color } from '../../utils/colors.app'
import Back from '../../assets/back.svg'




export const NavbarSettingsAccount = () => {

  return (
    <Container>
      <img width='20px' height='20px' flex-shrink='0' src={Back} alt='Arrow' />
      <TitleNav>Configurações</TitleNav>
    </Container>
  )
}