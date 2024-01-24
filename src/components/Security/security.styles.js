import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container =styled.div `
display:flex;
flex-direction: column;
width: 100%;
justify-content: center;
gap: 30px;
padding: 30px;
`

export const Wrapper =styled.div `
display: inline-flex;
align-items: flex-start;
gap: 6px;
`
export const Content =styled.div `
display: flex;
padding: 0px 5px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 5px;
`

export const Title = styled.text `
color: ${Color.TITLE_COLOR};
text-align: start;
font-size: 20px;
font-style: normal;
font-weight: 700;

`
export const SubTitle = styled.text `
color: ${Color.TEXT_COLOR}
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 100% */
letter-spacing: 0.54px;

`
export const Text = styled.text `
color: #B0ACAC;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 150% */
letter-spacing: 0.36px;

`
export const Footer = styled.text `
color: ${Color.TEXT_COLOR};
text-align: center;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 138.462% */
letter-spacing: 0.39px;

`