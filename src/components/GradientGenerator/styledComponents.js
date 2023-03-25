import style from 'styled-components'

export const MainContainer = style.div`
background-image:linear-gradient(${props => props.gradientValue});
  width:100vw;
  height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const Heading = style.h1`
color:#ffffff;
  font-size:35px;
  font-family: 'Roboto';
  padding-left:20px;
`

export const Description = style.p`
color:#ededed;
  font-size:20px;
  font-family: 'Roboto';
  padding-left:20px;
`

export const DirectionList = style.ul`
display:flex;
flex-wrap:wrap;
align-items:center;
`

export const InputElement1 = style.input`
background-color:(${props => props.value});
height:40px;
width:100px;
border:1px solid;
`
export const LabelElement1 = style.p`
color:#ffffff;
font-size:17px;
font-family: 'Roboto';
padding-left:10px;
`

export const InputElement2 = style.input`
background-color:(${props => props.value});
height:40px;
width:100px;
border:0px solid;
margin-left:80px;
color:#014f7b;
`

export const LabelElement2 = style.p`
color:#ffffff;
font-size:17px;
font-family: 'Roboto';
padding-left:90px;
`
export const InputSubContainer = style.div`
display:flex;
flex-direction:column;
`

export const InputMainContainer = style.div`
display:flex;
`

export const GenerateButton = style.button`
height:40px;
width:130px;
background-color:#00c9b7;
border:0px solid;
border-radius:5px;
color: #1e293b;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:10px;
font-size:18px;
font-family:"Roboto";
`
