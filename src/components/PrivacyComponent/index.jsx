import { Container, TextOption, Content, Wrapper, SubTitle, Text, Line } from "./privacy.styles"
import security from '../../assets/Security.svg'
import BlackPrivacy from '../../assets/blackprivacy.svg'





export const PrivacyComponent = () => {

  return (
    <Container>

      <Wrapper>
        <img width='66px' height='67px' flex-shrink='0' src={BlackPrivacy} alt='icon' />
        <Content>
          <SubTitle>Central de Privacidade</SubTitle>
          <Text>Saiba como nós protegemos a sua privacidade</Text>
        </Content>
      </Wrapper>

      <Content>
        <SubTitle>Localização</SubTitle>
        <TextOption>Ativado</TextOption>
        <Line />
      </Content>
      <Content>
        <SubTitle>Notificações</SubTitle>
        <TextOption>Controle quais mensagens deseja receber</TextOption>
        <Line />
      </Content>
      <Content>
        <SubTitle>Alterar senha</SubTitle>
        <TextOption>Última atualização da senha há 7 meses.</TextOption>
        <Line />
      </Content>



    </Container>
  )
}