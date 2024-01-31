import { Container, Wrapper, Content, Subtitle, Title, Line, TrashContent } from "./paymentInput.styles"
import Trash from '../../assets/trash.svg'
import Type1 from '../../assets/Type1.svg'
import Type2 from '../../assets/Type2.svg'
import Money from '../../assets/Money.svg'
import HandCard from '../../assets/handcard.svg'


export const PaymentInput = () => {



  return (
    <Container>
      <Title> Formas de pagamento</Title>
      <Wrapper>
        <TrashContent>
          <Content>
            <img width='34px' height='33px' flex-shrink='0' src={Type1} alt='credit type Card' />
            <Subtitle>*****  1267</Subtitle>
          </Content>
          <img width='22px' height='25px' flex-shrink='0' src={Trash} alt='Trash' />
        </TrashContent>
        <Line />
        <TrashContent>
          <Content>
            <img width='39px' height='42px' flex-shrink='0' src={Type2} alt='credit type Card' />
            <Subtitle>*****  4567</Subtitle>
          </Content>
          <img width='22px' height='25px' flex-shrink='0' src={Trash} alt='Trash' />
        </TrashContent>
        <Line />
        <Content>
          <img width='32px' height='32px' flex-shrink='0' src={Money} alt='Cash' />
          <Subtitle>Dinheiro</Subtitle>
        </Content>
        <Line />


        <Content>
          <img width='32px' height='32px' flex-shrink='0' src={HandCard} alt='Cash' />
          <Subtitle>Adicionar outra forma de pagamento</Subtitle>
        </Content>
      </Wrapper>
    </Container>
  )
}