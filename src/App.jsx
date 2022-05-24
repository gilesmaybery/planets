import { ReactComponentElement, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Planet from "./Planet"
import { Camera, TextureLoader } from 'three'
import PlanetScene from './PlanetScene';
import Layout from './Layout';
// Geometry


// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[props.height, props.width , 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

export default function App() {
  return (
    <Layout></Layout>
  )
}
