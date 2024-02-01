import { Container, Wrapper, Content, NameAdress, Line, InputSearch } from "./adressInput.styles"
import LocalBlack from '../../assets/localblack.svg'

export const AdressInput = () => {

  return (
    <Container>
      <InputSearch placeholder="Digite o nome do endereço" />
      <Wrapper>
        <Content>
          <img width='30px' height='29px' flex-shrink='0' src={LocalBlack} alt='Local' />
          <NameAdress>Indique pelo mapa</NameAdress>
        </Content>
        <Line />

        <Content>
          <img width='30px' height='29px' flex-shrink='0' src={LocalBlack} alt='Local' />
          <NameAdress>Rua fulano ciclano, 456 - Jardi</NameAdress>
        </Content>
        <Line />
        <Content>
          <img width='30px' height='29px' flex-shrink='0' src={LocalBlack} alt='Local' />
          <NameAdress>Avenida Juscelino K, 4256 -Pinheiros</NameAdress>
        </Content>
        <Line />
      </Wrapper>
    </Container>
  )
}