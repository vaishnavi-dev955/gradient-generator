import style from 'styled-components'

export const ListItem = style.li`
list-style-type:none;
`
export const DirectionButton = style.button`
height:40px;
width:130px;
background-color:#fffffff ;               
border:0px solid;
border-radius:5px;
color: #334155;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:10px;
font-size:18px;
font-family:"Roboto";
opacity:(${props => (props.isActiveId ? 1 : 0.5)});
`
