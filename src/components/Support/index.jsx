import { Container, Wrapper, Text, Title, Content } from "./support.styles"
import { Color } from '../../utils/colors.app'
import Logout from '../../assets/logout.svg'
import Information from '../../assets/info.svg'






export const Support = () => {

  return (
    <Container>

      <Title>Suporte</Title>

      <Wrapper>
        <Content>
          <img width='29px' height='29px' flex-shrink='0' src={Information} alt='i' />
          <Text> Informações</Text>
        </Content>

        <Content>
          <img width='29px' height='25px' flex-shrink='0' src={Logout} alt='Out door' />
          <Text> Sair</Text>
        </Content>

      </Wrapper>





    </Container>
  )
}