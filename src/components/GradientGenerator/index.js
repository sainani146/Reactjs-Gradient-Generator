import {Component} from 'react'
import {
  MainContainer,
  Heading,
  D1,
  ButtonsList,
  ColorContainer,
  ColorSection,
  ColorText,
  ColorInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
export default class GradientGenerator extends Component {
  state = {
    activeTab: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradient: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeDirection = direction => {
    this.setState({activeTab: direction})
  }

  onGenerate = () => {
    const {color1, color2, activeTab} = this.state
    this.setState({gradient: `to ${activeTab}, ${color1}, ${color2}`})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  render() {
    const {color1, color2, activeTab, gradient} = this.state

    return (
      <MainContainer data-testid="gradientGenerator" gradient={gradient}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <D1>Choose Direction</D1>
        <ButtonsList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              details={each}
              changeDirection={this.changeDirection}
              isActive={activeTab === each.value}
            />
          ))}
        </ButtonsList>
        <D1>Pick the Colors</D1>
        <ColorContainer>
          <ColorSection>
            <ColorText>{color1}</ColorText>
            <ColorInput
              onChange={this.onChangeColor1}
              type="color"
              value={color1}
            />
          </ColorSection>
          <ColorSection>
            <ColorText>{color2}</ColorText>
            <ColorInput
              onChange={this.onChangeColor2}
              type="color"
              value={color2}
            />
          </ColorSection>
        </ColorContainer>
        <GenerateButton type="button" onClick={this.onGenerate}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}
