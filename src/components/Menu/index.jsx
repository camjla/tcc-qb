import { Container, Name, Content } from "./menu.styles"
import Account from '../../assets/account.svg'
import History from '../../assets/history.svg'
import Home from '../../assets/home.svg'
import Services from '../../assets/services.svg'




export const Menu = () => {
  
  return(
    <Container>
      <Content>
      <img width='30px' height='30px' flex-shrink='0' src={Home} alt= 'Green House' />
        <Name>Inicio</Name>
        </Content>

        <Content>
        <img width='30px' height='30px'  flex-shrink='0' src={Services} alt= 'A scissors and a comb' />
        <Name>Serviços</Name>
        </Content>

        <Content>
        <img width='30px' height='30px'  flex-shrink='0' src={History} alt= 'a clipboard with a clock' />
        <Name>Histórico</Name>
        </Content>

        <Content>
        <img width='30px' height='30px' flex-shrink='0' src={Account} alt= 'a person' />
        <Name>Conta</Name>
        </Content>
      </Container>
  )
}