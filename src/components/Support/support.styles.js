import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container =styled.div `
width: 100%;
height: 25%;
justify-content: center;
display:flex;
flex-direction: column;
gap: 25px;
`


export const Wrapper =styled.div `
display:flex;
flex-direction: column;
gap:25px;

`

export const Content = styled.div `
display: inline-flex;
align-items: center;
gap: 12px;
cursor: pointer;
`

export const Text =styled.text `
color: ${Color.TEXT_COLOR};
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 100% */
letter-spacing: 0.54px;
`

export const Title = styled.text `
color: ${Color.TITLE_COLOR};
text-align: start;
font-size: 30px;
font-style: normal;
font-weight: 700;

`