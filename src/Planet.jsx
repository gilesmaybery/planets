import { render } from "@testing-library/react"
import react from "react"
import earth from "./index"

// Would ideally be typed props, like Name, Texture, 
function Planet(props){
 return(
    <mesh visible  position={props.position} castShadow>
    <sphereGeometry attach="geometry" args={[props.radius, 256, 256]} />
    <meshPhongMaterial attach="material"
     bumpMap={props.bumpMap}
     map={props.texture}
    />
  </mesh>
 )
}

export default Planet;