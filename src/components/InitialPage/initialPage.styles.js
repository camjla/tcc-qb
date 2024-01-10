import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

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
  width: 320px;
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

export const Title = styled.text`
  color: ${Color.TEXT_COLOR};
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.78;
`

export const ContainerNews = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-right: 14px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`
export const Subtitle = styled.text`
  color: ${Color.TEXT_COLOR};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.78;
`
export const News = styled.div`
  width: 310px;
  height: 118px;
  border-radius: 8px;
  border: 1px solid #bfbfbf;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.4);
`
export const Topic = styled.text`
  color: ${Color.TEXT_COLOR};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.78;
`
export const Category = styled.text`
  color: ${Color.TEXT_COLOR};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.78;
`
