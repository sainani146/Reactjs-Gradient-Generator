// Style your elements here
import Styled from 'styled-components'

export const MainContainer = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(${props => props.gradient});
`
export const Heading = Styled.h1`
    color: #ffffff;
    font-size: 35px;
    font-weight: 400;
    font-family: "roboto";
`
export const D1 = Styled.p`
    font-size: 25px;
    color:  #ffffff79;
`
export const ButtonsList = Styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
`
export const ColorContainer = Styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
`

export const ColorSection = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`

export const ColorText = Styled.p`
    color: #ededed;
    font-size: 25px;
`
export const GenerateButton = Styled.button`
    background-color: #00c9b7;
    font-size: 25px;
    color:  #1e293b;
    padding: 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
`
export const ColorInput = Styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
