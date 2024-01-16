import { Container, Wrapper, TextOption, Content } from "./listOptions.styles"
import { Color } from '../../utils/colors.app'
import Messages from '../../assets/Messages.svg'
import HistoryServices from '../../assets/HistoryServices.svg'
import Persona from '../../assets/persona.svg'
import Arrow from '../../assets/arrow.svg'
import Address from '../../assets/address.svg'
import Payment from '../../assets/payments.svg'
import Settings from '../../assets/settings.svg'





export const ListOptions = () => {

  return (
    <Container>

      <Wrapper>
        <Content>
          <img width='27px' height='27px' flex-shrink='0' src={Settings} alt='gear' />
          <TextOption>Configurações</TextOption>
        </Content>
        <img width='24px' height='24px' flex-shrink='0' src={Arrow} alt='Arrow-right' />
      </Wrapper>

      <Wrapper>
        <Content>
          <img width='27px' height='27px' flex-shrink='0' src={Payment} alt='Card' />
          <TextOption>Pagamentos</TextOption>
        </Content>
        <img width='24px' height='24px' flex-shrink='0' src={Arrow} alt='Arrow-right' />
      </Wrapper>

      <Wrapper>
        <Content>
          <img width='27px' height='27px' flex-shrink='0' src={Messages} alt='Ballon Messages' />
          <TextOption>Mensagens</TextOption>
        </Content>
        <img width='24px' height='24px' flex-shrink='0' src={Arrow} alt='Arrow-right' />
      </Wrapper>


      <Wrapper>
        <Content>
          <img width='27px' height='27px' flex-shrink='0' src={HistoryServices} alt='Bag with clock' />
          <TextOption>Histórico de serviços</TextOption>
        </Content>
        <img width='24px' height='24px' flex-shrink='0' src={Arrow} alt='Arrow-right' />
      </Wrapper>

      <Wrapper>
        <Content>
          <img width='27px' height='27px' flex-shrink='0' src={Address} alt='Point' />
          <TextOption>Alterar endereço</TextOption>
        </Content>
        <img width='24px' height='24px' flex-shrink='0' src={Arrow} alt='Arrow-right' />
      </Wrapper>


      <Wrapper>
        <Content>
          <img width='27px' height='27px' flex-shrink='0' src={Persona} alt='User' />
          <TextOption>Se torne um profissional</TextOption>
        </Content>
        <img width='24px' height='24px' flex-shrink='0' src={Arrow} alt='Arrow-right' />
      </Wrapper>








    </Container>
  )
}