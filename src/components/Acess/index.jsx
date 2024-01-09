import { Container, Input, PlaceHolder, Wrapper, Button,Span, Content } from "./acess.styles"
import { Color } from '../../utils/colors.app'
import Logo from '../../assets/logo.svg'



export const Acess = () => {
  const handleButtonClick = () => {
    // Aqui você pode adicionar a lógica que deseja executar quando o botão for clicado.
    console.log('Botão foi clicado!');
  };
  return(
    <Container>
        <img width='231px' height='144px' flex-shrink='0' src={Logo} alt= 'Logo' />
        <Wrapper>
    <PlaceHolder>E-mail</PlaceHolder>
        <Input  type='email'/>
        </Wrapper>
        <Wrapper>
        <PlaceHolder>Senha</PlaceHolder>
        <Input   type='password' />
        </Wrapper>

        <Button type='submit' onClick={handleButtonClick} >Entrar</Button>
       <Content>
        <Span>Não possui uma conta?</Span>
        <Span>Crie uma agora mesmo</Span>
        </Content>
    </Container>
  )
}