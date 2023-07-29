// Style your elements here
import Styled from 'styled-components'

export const ButtonItem = Styled.li`
    background-color: transparent;
    border-radius: 5px;
`

export const DirectionButton = Styled.button`
    background-color: #ffffff;
    color: black;
    width: 150px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 5px;
    opacity: ${props => (props.isActive ? 1 : 0.5)}
`
