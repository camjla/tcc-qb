import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
padding: 25px 10px 0 10px;

`
export const Wrapper = styled.div`
display: inline-flex;
height: 38px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;

`

export const Content = styled.div`
display: flex;
width: 100%;
height: 81px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
`
export const Title = styled.text `
color: ${Color.TITLE_COLOR}
font-size: 16px;
font-style: normal;
font-weight: 700;
letter-spacing: 0.48px;
`
export const Description = styled.text `
color: ${Color.LOGIN_COLOR};
text-align: start;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 150% */
letter-spacing: 0.36px;
`
export const Function = styled.a `
color: #414040;
font-size: 14px;
font-style: normal;
font-weight: 500;
cursor: pointer;
line-height: 18px; /* 112.5% */
letter-spacing: 0.48px;

&:hover{
  color: ${Color.PRIMARY_COLOR};
}
`