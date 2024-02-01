import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 30px;
`

export const Wrapper = styled.div `
display:flex;
flex-direction: column;
gap: 15px;
`
export const Content = styled.div `
display:flex;
flex-direction: row;
align-items:center;
cursor:pointer;
gap: 15px;
`
export const Line= styled.div `
width: 100%;
height: 1px;
background: rgba(0, 0, 0, 0.20);
`

export const InputSearch = styled.input `
width: 100%;
height: 40px;
flex-shrink: 0;
font-weight: 400;
padding: 10px;
color: #7c7c7c;
border-radius: 5px;
border: 0.5px solid #96c486;
background: #f3efef;
box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

&:focus {
  border: 2px solid #f498af; // Cor do border no estado focus
  outline: none; // Remove a borda azul padrão do navegador
  box-shadow: 0px 0px 6px rgba(0, 123, 255, 0.5); // Adiciona uma sombra para destacar o input em foco
  color: ${Color.TEXT_COLOR};
}

`

export const NameAdress = styled.a `

color: ${Color.TEXT_COLOR};
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 128.571% */
letter-spacing: 0.42px;
`
