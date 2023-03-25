import {Component} from 'react'
import {
  MainContainer,
  Heading,
  Description,
  DirectionList,
  InputMainContainer,
  InputSubContainer,
  LabelElement1,
  InputElement1,
  LabelElement2,
  InputElement2,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeDirectionId: gradientDirectionsList[0].directionId,
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeBackgroundColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeBackgroundColor2 = event => {
    this.setState({color2: event.target.value})
  }

  clickDirectionButton = directionId => {
    this.setState({activeDirectionId: directionId})
  }

  onClickGenerateButton = () => {
    const {color1, color2} = this.state
    const {activeDirectionId} = this.state
    const DirectionElement = gradientDirectionsList.filter(
      eachItem => eachItem.directionId === activeDirectionId,
    )
    const directionValue = DirectionElement[0].value
    this.setState({gradientValue: `to ${directionValue}, ${color1}, ${color2}`})
  }

  render() {
    const {color1, color2, activeDirectionId, gradientValue} = this.state
    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Description>Choose Direction</Description>
        <DirectionList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              GradientItemData={eachItem}
              key={eachItem.directionId}
              clickDirectionButton={this.clickDirectionButton}
              isActive={eachItem.directionId === activeDirectionId}
            />
          ))}
        </DirectionList>
        <Description>Pick the Colors</Description>
        <InputMainContainer>
          <InputSubContainer>
            <LabelElement1>{color1}</LabelElement1>
            <InputElement1
              type="color"
              value={color1}
              onChange={this.onChangeBackgroundColor1}
            />
          </InputSubContainer>
          <InputSubContainer>
            <LabelElement2>{color2}</LabelElement2>
            <InputElement2
              type="color"
              onChange={this.onChangeBackgroundColor2}
              value={color2}
            />
          </InputSubContainer>
        </InputMainContainer>
        <GenerateButton type="button" onClick={this.onClickGenerateButton}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
