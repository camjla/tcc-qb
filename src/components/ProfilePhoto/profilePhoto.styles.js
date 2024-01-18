import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container =styled.div `
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 85px;
gap:10px;
cursor: pointer;
`

export const WrapperIMG =styled.div `
position: relative;
padding-left: 5px;
`
export const WrapperIMGPencil =styled.div `
position: absolute;
padding-bottom: 190px;
padding-left: 115px;
cursor='pointer'
`

export const Content =styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: center;
gap: 5px;

`

export const UserName= styled.text`
color: ${Color.TITLE_COLOR};
text-align: center;
font-size: 25px;
font-weight: 500;
line-height: 18px; /* 72% */
letter-spacing: 0.75px;

`
export const ReviewText= styled.text `
color: ${Color.TITLE_COLOR};
text-align: center;
font-size: 20px;
font-weight: 400;
line-height: 18px; /* 120% */
letter-spacing: 0.45px;
`