import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {GradientItemData, clickDirectionButton, isActive} = props
  const {displayText, directionId} = GradientItemData
  const onClickDirectionButtonAndGetValue = () =>
    clickDirectionButton(directionId)

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickDirectionButtonAndGetValue}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
