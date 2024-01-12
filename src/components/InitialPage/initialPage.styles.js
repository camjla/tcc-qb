import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

//CONTAINERS
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  justify-content: center;
  gap: 25px;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`
export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`
export const ContentIcon = styled.div`
  position: absolute;
  padding-right: 15px;
`
export const ContentInput = styled.div`
  position: relative;
  padding-left: 5px;
`
export const Input = styled.input`
  width: 310px;
  height: 40px;
  flex-shrink: 0;
  font-weight: 500;
  color: #7c7c7c;
  border-radius: 5px;
  border: 0.5px solid #96c486;
  background: #f3efef;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:focus {
    border: 2px solid #f498af; // Cor do border no estado focus
    outline: none; // Remove a borda azul padrão do navegador
    box-shadow: 0px 0px 6px rgba(0, 123, 255, 0.5); // Adiciona uma sombra para destacar o input em foco
    color: ${Color.TEXT_COLOR};
  }
`
export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
`
export const ContainerNews = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 12px;
`
export const NewsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
`
export const News = styled.div`
  width: 310px;
  height: 118px;
  border-radius: 8px;
  border: 1px solid #bfbfbf;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`
export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  width: 300px;
`

export const Services = styled.div`
  width: 310px;
  height: 190px;
  padding-top: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(215, 215, 215, 0.85);
  cursor: pointer;
`
//TEXTOS
export const Title = styled.text`
  color: ${Color.TEXT_COLOR};
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.78;
`
export const Subtitle = styled.text`
  color: ${Color.TEXT_COLOR};
  font-size: 18px;
  font-weight: 500;
`
export const Topic = styled.text`
  color: ${Color.TITLE_COLOR};
  font-size: 14px;
  font-weight: 700;
`

export const Subtopic = styled.text`
  color: ${Color.TEXT_COLOR};
  font-size: 10px;
  font-weight: 400;
`
export const Category = styled.text`
  color: #a6a6a6;
  font-size: 9px;
  font-weight: 500;
`

export const PostText = styled.text`
  text-align: justify;
  color: ${Color.TEXT_COLOR};
  font-size: 8px;
  font-weight: 400;
`
