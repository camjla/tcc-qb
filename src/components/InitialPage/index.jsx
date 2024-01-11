import React, { useState, useEffect } from 'react';
import {FiSun , FiMoon  } from 'react-icons/fi';
import { Container, Input,  ContentIcon, ContentInput, Wrapper,Title, ContentTitle, ContainerNews, Subtitle, News, NewsWrapper, Topic, Category, Subtopic, Post, PostText, PostWrapper, Services} from "./initialPage.styles"
import {Carousel} from '../../components/Carousel'
import Search from '../../assets/search.svg'
import BeProfessional from '../../assets/professionalpost.png'
import Post1 from '../../assets/picPost.svg'
import Logo from '../../assets/logo.svg'





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

    <Subtitle>Serviços em destaques</Subtitle>
    <Services>
    <Carousel />
    </Services>

      <img  style={{width: '328px', height: '124px'}} src={BeProfessional} alt= 'Rectangle' />

    <ContainerNews>
      <Subtitle>Novidades</Subtitle>


      {/* Post de cabelo */}
      <News>
        <NewsWrapper> 
          <img  width='58px' height='48px' flex-shrink='0' src={Post1} alt= 'Girl Hair' />
          <Post>
          <Category>Cabelo</Category>
          <Topic>Corte seu cabelo em casa</Topic>
          <Subtopic>Saiba como cortar seu cabelo por conta própria</Subtopic>
          </Post>
        </NewsWrapper>
       
        <PostWrapper>
        <PostText>
          Lorem ipsum dolor sit amet consectetur. Ac urna eu ipsum sagitti felisorta.       
          Semper eget suspendisse urna amet sedLorem ipsum dolor sit amet consectetur. Ac urna eu ipsum sagitti felisorta.       
          Semper eget suspendisse urna amet sed...
          </PostText>
          </PostWrapper>
          
      </News>


      {/* Post da empresa */}
      <News>
        <NewsWrapper> 
          <img  width='58px' height='48px' flex-shrink='0' src={Logo} alt= 'Girl Hair' />
          <Post>
          <Category>Estética</Category>
          <Topic>Entenda a nossa história</Topic>
          <Subtopic>Conheça como nasceu a Quick Beauty</Subtopic>
          </Post>
        </NewsWrapper>
       
       <PostWrapper>
        <PostText>
          Lorem ipsum dolor sit amet consectetur. Ac urna eu ipsum sagitti felisorta.       
          Semper eget suspendisse urna amet sedLorem ipsum dolor sit amet consectetur. Ac urna eu ipsum sagitti felisorta.       
          Semper eget suspendisse urna amet sed...
          </PostText>
          </PostWrapper>
      </News>
    </ContainerNews>

      </Container>
  )
}