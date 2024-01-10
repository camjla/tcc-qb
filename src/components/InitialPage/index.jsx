import React, { useState, useEffect } from 'react';
import {FiSun , FiMoon  } from 'react-icons/fi';
import { Container, Input,  ContentIcon, ContentInput, Wrapper,Title, ContentTitle, ContainerNews, Subtitle, News} from "./initialPage.styles"
import Search from '../../assets/search.svg'
import BeProfessional from '../../assets/professionalpost.png'





export const InitialPage = () => {
  const [mensagem, setMensagem] = useState('');
  const [icone, setIcone] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const dataAtual = new Date();
      const hora = dataAtual.getHours();
      
      if (hora >= 6 && hora < 18) {
        setMensagem(`Bom dia, NomedoUser`);
        setIcone(<FiSun  size={20} color="yellow" />);
      } else {
        setMensagem(`Boa noite, Nomedouser`);
        setIcone(<FiMoon  size={20} color="blue" />);
      }
    }, 1000); // atualiza a cada segundo

    return () => clearInterval(interval); // limpa o intervalo ao desmontar o componente
  }, []); //
  return(
    <Container>
      <ContentTitle>
      {icone}
      <Title>{mensagem}</Title>
      </ContentTitle>


      <Wrapper>
      <ContentInput>
      <Input placeholder="Qual serviço quer solicitar?"/>
      </ContentInput>
      <ContentIcon>
      <img  width='23px' height='23px' flex-shrink='0' src={Search} alt= 'Loupe' />
      </ContentIcon>
      </Wrapper>

      <img  style={{width: '328px', height: '124px', cursor:'pointer'}} src={BeProfessional} alt= 'Rectangle' />

    <ContainerNews>
      <Subtitle>Novidades</Subtitle>
      <News>
        
      </News>
    </ContainerNews>

      </Container>
  )
}