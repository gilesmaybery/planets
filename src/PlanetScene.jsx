
import Planet from "./Planet";

function PlanetScene(){
    return(
        <>
        <Planet name={"Earth"} position={[-40,-1,2]} radius={1} color="green"></Planet>
        <Planet name={"Jupiter"}position={[-30,-1,2]}radius={5}color="blue"></Planet>
        <Planet name={"Mars"}position={[-20,-1,2]}radius={0.5}color="red"></Planet>
        <Planet name={"Mercury"}position={[-10,-1,2]}radius={1.5}color="orange"></Planet>
        <Planet name={"Neptune"}position={[0,-1,2]}radius={0.8}color="blue"></Planet>
        <Planet name={"Pluto"}position={[10,-1,2]}radius={0.95}color="darkblue"></Planet>
        <Planet name={"Saturn"}position={[20,-1,2]}radius={3}color="yellow"></Planet>
        <Planet name={"Uranus"}position={[30,-1,2]}radius={1.2}color="purple"></Planet>
        <Planet name={"Venus"}position={[40,-1,2]}radius={0.8}color="orange"></Planet>
        </>
    )
}
export default PlanetScene;