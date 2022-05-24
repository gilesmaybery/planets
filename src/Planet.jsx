import { Html } from "@react-three/drei"
import "./styles.css"
import { useState } from "react"

// Would ideally be typed props, like Name, Texture, 
function Planet(props) {
  const [clicked, click] = useState(false)
  return (
    <mesh
      visible
      position={props.position}
      castShadow
      scale={clicked ? 1.5 : 1}
      onClick={(evt) =>{
        click(!clicked)
  
      }
    } 
    >
      <sphereGeometry attach="geometry" args={[props.radius, 100, 100]} />
      <meshStandardMaterial
        color={props.color}
        roughness={0.75}
      />
      <Html distanceFactor={1000}>
        <div id="content">
          {props.name}
        </div>
      </Html>
    </mesh>
  )
}

export default Planet;