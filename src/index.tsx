import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { Vector3, TextureLoader } from 'three'
import App from "./App"
import textureManfifest from "./assetManifest"
import getData from "./GetData"

let earth = [];
// Loads the assets for the 3D models
function startAssetLoading(){
    textureManfifest.forEach(texturePath => {
        let texture = new TextureLoader().load(texturePath);

    });
    const texture = new TextureLoader().load("");
};
getData('mars');
let earthTexture = new TextureLoader().load("../assets/earth/earthbump1k.jpeg");
let earthMap = new TextureLoader().load("../assets/earth/earthmap1k.jpeg",function(){
        console.log("App started")
        earth.push(earthTexture);
        earth.push(earthMap);
        ReactDOM.render(<App></App>, document.getElementById('root'));
});

export default earth;