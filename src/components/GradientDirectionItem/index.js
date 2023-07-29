// Write your code here
import {ButtonItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, isActive} = props
  const {displayText, value} = details

  const onChangeDirection = () => {
    changeDirection(value)
  }

  return (
    <ButtonItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onChangeDirection}
      >
        {displayText}
      </DirectionButton>
    </ButtonItem>
  )
}

export default GradientDirectionItem
