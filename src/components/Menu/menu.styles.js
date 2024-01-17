import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  bottom: 0%;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100px;
  padding: 8px 8px 0px 8px;
  background-color: ${Color.BACKGROUND};
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1) inset;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0;
`

export const Name = styled.a`
  color: ${Color.TITLE_COLOR};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.39px;
  cursor: pointer;
`
