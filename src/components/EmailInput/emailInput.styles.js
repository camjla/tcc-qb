import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 30px;
`
export const Content =styled.div `
display: inline-flex;
flex-direction: column;
gap: 25px;
`

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 5;
`

export const Input = styled.input`
width: 100%;
height: 60px;
flex-shrink: 0;
  border-radius: 20px;
  border: 1px rgba(59.5, 59.5, 59.5, 0.58) solid;


  &:focus {
    border: 1px ${Color.PRIMARY_COLOR};
  }
`

export const ButtonDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  width: 50%;
  height: 63px;
  flex-shrink: 0;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.39px;
  color: ${Color.TITLE_COLOR};
  border-radius: 20px;
  border: 1px solid ${Color.PRIMARY_COLOR};
  background: ${Color.PRIMARY_COLOR};
  cursor: pointer;
  &:hover {
    background-color: #f8c7d3;
    color: #ffffff;
    border: 1px solid #f8c7d3;
  }
  `

  export const PlaceHolder = styled.text`
  color: ${Color.LOGIN_COLOR};
  font-size: 13;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.39;
  word-wrap: break-word;
`
  export const Title = styled.text`
  color:${Color.TEXT_COLOR};
  font-size: 18px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 112.5% */
  letter-spacing: 0.48px;
`

export const Span = styled.text`
color: ${Color.TITLE_COLOR};
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 180% */
letter-spacing: 0.3px;
`