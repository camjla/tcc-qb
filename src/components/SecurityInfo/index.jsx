import React from "react";
import { Container, Description, Function, Title, Wrapper, Content } from "./securityInfo.styles";


export const SecurityInfo = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Verificação de duas etapas</Title>
          <Function>Desativado</Function>

        </Wrapper>
        <Content>
          <Description>
            Caso queira ativar a verificação de duas etapas, terá que inserir o código de verificação sempre que entrar na conta
            e que contratar um serviço.
          </Description>
        </Content>
      </Container>

    </>
  );
};
