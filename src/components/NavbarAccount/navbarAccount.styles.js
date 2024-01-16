import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
display: flex;
width: 100%;
height: 7%;
padding: 0px 50px 0px 19px;
align-items: center;
gap: 137px;
flex-shrink: 0;
border-bottom: 1px solid rgba(151, 151, 151, 0.50);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const TitleNav =styled.text `
color: ${Color.SECOND_COLOR};
text-align: center;
font-size: 20px;
font-style: normal;
font-weight: 700;

`