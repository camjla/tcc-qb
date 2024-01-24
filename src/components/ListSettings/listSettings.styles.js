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

export const Wrapper = styled.div `

display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 34px;
flex-shrink: 0;
cursor: pointer;
`
export const Content = styled.div `
display: flex;
width: 100%;
padding: 2px 0px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 7px;

`
export const WrapperIMG =styled.div `
position: relative;
padding-left: 5px;
`
export const WrapperIMGPencil =styled.div `
position: absolute;
padding-bottom: 420px;
padding-left: 115px;
cursor='pointer'
`

export const Line= styled.div `
width: 100%;
height: 1px;
background: rgba(0, 0, 0, 0.20);
`
export const TextOption = styled.text  `
color: ${Color.TITLE_COLOR};
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 100% */
letter-spacing: 0.54px;

`
export const Text = styled.text  `
color: ${Color.TEXT_COLOR_COLOR};
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 100% */
letter-spacing: 0.54px;
`

export const Title = styled.text `
color: ${Color.TITLE_COLOR};
text-align: start;
font-size: 20px;
font-style: normal;
font-weight: 700;

`