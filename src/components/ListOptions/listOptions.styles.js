import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container =styled.div `
display:flex;
flex-direction: column;
width: 433px;

align-items: center;

`

export const Wrapper = styled.div `
width: 80%;
height: 10%;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 34px;
flex-shrink: 0;
cursor: pointer;
`
export const Content = styled.div `
display:flex;
flex-direction: row;
gap: 15px;
align-items: center;

`
export const TextOption = styled.text  `
color: ${Color.TEXT_COLOR};
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 100% */
letter-spacing: 0.54px;

`