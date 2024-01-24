import { Container, TitleNav } from "./NavbarPrivacy.styles"
import { Color } from '../../utils/colors.app'
import Back from '../../assets/back.svg'




export const NavbarPrivacy = () => {

  return (
    <Container>
      <img width='20px' height='20px' flex-shrink='0' src={Back} alt='Arrow' />
      <TitleNav>Privacidade</TitleNav>
    </Container>
  )
}