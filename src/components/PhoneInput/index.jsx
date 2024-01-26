import { Input, PlaceHolder, Button, Container, Wrapper, Content, Title, ButtonDiv, Span } from "./phoneInput.styles"




export const PhoneInput = () => {

  const handleButtonClick = () => {
    // Aqui você pode adicionar a lógica que deseja executar quando o botão for clicado.
    console.log('Botão foi clicado!');
  };

  return (
    <Container>
      <Title>Altere seu telefone</Title>
      <Content>
        <Wrapper>
          <PlaceHolder>Telefone</PlaceHolder>
          <Input type='phone' />
        </Wrapper>
        <Span>Iremos te enviar um código de verificação para este número</Span>
      </Content>
      <ButtonDiv>
        <Button type='submit' onClick={handleButtonClick} >Alterar</Button>
      </ButtonDiv>
    </Container>
  )
}