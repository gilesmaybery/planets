
import { Html } from "@react-three/drei";
import "./styles.css"
export default function ListItem(props) {
    return (
        <div id="listItem">{props.name}</div>
    );
}