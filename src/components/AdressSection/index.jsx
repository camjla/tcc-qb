import { Container, Wrapper, Content, Subtitle, Title, Line } from "./adressSection.styles"
import Plus from '../../assets/Plus.svg'
import LocalIcon from '../../assets/IconPark.svg'
import LocalHome from '../../assets/Local.svg'



export const AdressSection = () => {



  return (
    <Container>
      <Title> Endereços</Title>
      <Wrapper>

        <Content>
          <img width='34px' height='33px' flex-shrink='0' src={LocalIcon} alt='Local' />
          <Subtitle>Local Atual</Subtitle>
        </Content>
        <Line />

        <Content>
          <img width='39px' height='42px' flex-shrink='0' src={LocalHome} alt='Home' />
          <Subtitle>Casa</Subtitle>
        </Content>
        <Line />
        <Content>
          <img width='32px' height='32px' flex-shrink='0' src={Plus} alt='Plus' />
          <Subtitle>Adicionar um novo local</Subtitle>
        </Content>
        <Line />
      </Wrapper>
    </Container>
  )
}