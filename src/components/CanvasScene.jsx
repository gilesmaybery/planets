import PlanetScene from "./PlanetScene";
import { Canvas } from '@react-three/fiber'

// A ground plane 
function GroundPlane() {
    return (
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshStandardMaterial attach="material" color="darkgrey" />
        </mesh>
    );
}
// A backdrop for the planets
function BackDrop() {
    return (
        <mesh receiveShadow position={[0, -1, -50]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshStandardMaterial attach="material" color="darkgrey" />
        </mesh>
    );
}
// scene setup, some lighting, 
export default function CanvasScene() {
    return (
        <Canvas
            camera={{ fov: 60, position: [0, 90, 10] }}>
            <GroundPlane />
            <BackDrop />
            <pointLight position={[-10, 10, 10]} color="white" />
            <PlanetScene></PlanetScene>
        </Canvas>
    )
}

