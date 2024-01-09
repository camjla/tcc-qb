import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  padding-top: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`
export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 5;
`
export const Input = styled.input`
  width: 241px;
  height: 55px;
  border-radius: 20px;
  border: 1px rgba(59.5, 59.5, 59.5, 0.58) solid;

  input:focus {
    border: ${Color.PRIMARY_COLOR};
  }
`
export const Button = styled.button`
  width: 148px;
  height: 63px;
  flex-shrink: 0;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.39px;
  color: #ffffff;
  border-radius: 20px;
  border: 1px solid ${Color.PRIMARY_COLOR};
  background: ${Color.PRIMARY_COLOR};
  cursor: pointer;
  &:hover {
    background-color: #f8c7d3;
    color: #ffffff;
    border: 1px solid #f8c7d3;
  }
`
export const PlaceHolder = styled.text`
  color: ${Color.LOGIN_COLOR};
  font-size: 13;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0.39;
  word-wrap: break-word;
`
export const Span = styled.a`
  color: ${Color.LOGIN_COLOR};
  font-size: 13;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0.39;
  word-wrap: break-word;
  cursor: pointer;
`
