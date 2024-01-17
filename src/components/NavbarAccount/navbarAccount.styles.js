import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 1fr;

width: 100%;
height: 7%;
align-items: center;
justify-items: center;
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