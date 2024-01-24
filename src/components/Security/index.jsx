import { Container, Title, Content, Wrapper, SubTitle, Text, Footer } from "./security.styles"
import security from '../../assets/Security.svg'
import Privacy from '../../assets/privacy.svg'





export const Security = () => {

  return (
    <Container>

      <Title>Segurança e Privacidade</Title>
      <Wrapper>
        <img width='46px' height='46px' flex-shrink='0' src={Privacy} alt='icon' />
        <Content>
          <SubTitle>Privacidade</SubTitle>
          <Text>Controle as informações que você divide com a gente</Text>
        </Content>
      </Wrapper>

      <Wrapper>
        <img width='46px' height='46px' flex-shrink='0' src={security} alt='icon' />
        <Content>
          <SubTitle>Segurança</SubTitle>
          <Text>Garanta a segurança de sua conta com a
            verificação de duas etapas</Text>
        </Content>
        <Footer>Desative sua conta</Footer>
      </Wrapper>

    </Container>
  )
}