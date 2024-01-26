import { Input, PlaceHolder, Button, Container, Wrapper, Content, Title, ButtonDiv, Span } from "./emailInput.styles"




export const EmailInput = () => {

  const handleButtonClick = () => {
    // Aqui você pode adicionar a lógica que deseja executar quando o botão for clicado.
    console.log('Botão foi clicado!');
  };

  return (
    <Container>
      <Title>Altere seu email</Title>
      <Content>
        <Wrapper>
          <PlaceHolder>E-mail</PlaceHolder>
          <Input type='email' />
        </Wrapper>
        <Span>Iremos te enviar uma confirmação para este e-mail</Span>
      </Content>
      <ButtonDiv>
        <Button type='submit' onClick={handleButtonClick} >Alterar</Button>
      </ButtonDiv>
    </Container>
  )
}