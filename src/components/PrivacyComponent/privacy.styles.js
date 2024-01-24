import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container =styled.div `
display:flex;
flex-direction: column;
width: 100%;
gap: 50px;
padding: 30px 15px 0 10px;
`

export const Wrapper =styled.div `
display: flex;
flex-direction: row;
align-items: center;
gap: 6px;
`
export const Content =styled.div `
display: flex;
padding: 0px 5px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 5px;
cursor: pointer;
`

export const Line= styled.div `
width: 100%;
height: 1px;
background: rgba(0, 0, 0, 0.20);
`

export const Title = styled.text `
color: ${Color.TITLE_COLOR};
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 100% */
letter-spacing: 0.54px;

`
export const SubTitle = styled.text `
color: ${Color.TEXT_COLOR}
color: #000;
text-align: justify;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 18px; /* 100% */
letter-spacing: 0.54px;

`
export const Text = styled.text `
color: #B0ACAC;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.54px;


`
export const TextOption = styled.text `
color: ${Color.TITLE_COLOR};
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.54px;

`