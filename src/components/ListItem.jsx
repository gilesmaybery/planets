
import { Html } from "@react-three/drei";
import "./../styles.css"
import {useState} from 'react'

export default function ListItem(props) {
    const [clicked, click] = useState(false)
    const [hovered, hover] = useState(false)
    return (
        <div 
        onClick={(evt) => {
           click(!clicked)
           // Todo : add some way of handling the selected Planet state
        }} 
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        id={hovered ? "listItem-hover" : "listItem"}
        >{props.name}</div>
    );
}