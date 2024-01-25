import { Input, PlaceHolder, Button, Container, Wrapper, Content, Title, ButtonDiv } from "./nameInput.styles"




export const NameInput = () => {

  const handleButtonClick = () => {
    // Aqui você pode adicionar a lógica que deseja executar quando o botão for clicado.
    console.log('Botão foi clicado!');
  };

  return (
    <Container>
      <Title>Altere seu nome e sobrenome</Title>
      <Content>
        <Wrapper>
          <PlaceHolder>Nome</PlaceHolder>
          <Input type='text' />
        </Wrapper>
        <Wrapper>
          <PlaceHolder>Sobrenome</PlaceHolder>
          <Input type='text' />
        </Wrapper>
      </Content>
      <ButtonDiv>
        <Button type='submit' onClick={handleButtonClick} >Alterar</Button>
      </ButtonDiv>
    </Container>
  )
}