import { Container, Wrapper, TextOption, Content, Text, Line, Title, WrapperIMG, WrapperIMGPencil } from "./listSettings.styles"
import Pencil from '../../assets/Edit.svg'

import Icon from '../../assets/IconProfile.svg'





export const ListSettings = () => {

  return (
    <Container>
      <WrapperIMG>
        <img width='157px' height='158px' flex-shrink='0' src={Icon} alt='icon' />
      </WrapperIMG>
      <WrapperIMGPencil>
        <img width='35px' height='44' flex-shrink='0' src={Pencil} alt='Pencil' />
      </WrapperIMGPencil>
      <Title>Informações da conta</Title>

      <Wrapper>
        <Content>

          <TextOption>Nome</TextOption>
          <Text>Nome do user</Text>
          <Line />
        </Content>

      </Wrapper>

      <Wrapper>
        <Content>

          <TextOption>Telefone</TextOption>
          <Text>11 90000-0000</Text>
          <Line />
        </Content>

      </Wrapper>

      <Wrapper>
        <Content>

          <TextOption>E-mail</TextOption>
          <Text>email@email.com</Text>
          <Line />
        </Content>

      </Wrapper>











    </Container>
  )
}