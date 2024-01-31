import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 30px;
`

export const Wrapper = styled.div `
display:flex;
flex-direction: column;
gap: 15px;
`
export const Content = styled.div `
display:flex;
flex-direction: row;
align-items:center;
cursor:pointer;
gap: 10px;
`
export const TrashContent = styled.div `
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
cursor:pointer;
`
export const Line= styled.div `
width: 100%;
height: 1px;
background: rgba(0, 0, 0, 0.20);
`

export const Subtitle = styled.a `

color: ${Color.TEXT_COLOR};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 128.571% */
letter-spacing: 0.42px;
`


export const Title = styled.text`
color:${Color.TEXT_COLOR};
font-size: 18px;
text-align: left;
font-style: normal;
font-weight: 800;
line-height: 18px; /* 112.5% */
letter-spacing: 0.48px;
`
