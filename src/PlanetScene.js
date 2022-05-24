import { render } from "@testing-library/react";


import textureManfifest from "./assetManifest"
// The main class for the planets
function PlanetScene(){
var planetMaterials = [];


    function render(){
       <div></div>
    }
}

// Helper function to load and create the textures for the planets
function loadPlanets(){
    textureManfifest.forEach(texturePath => {

        // Load the texture for each planet
        let texture = new TextureLoader().load(texturePath);
        const material = new THREE.MeshPhongMaterial()
        material.texture = texture;

        // Load the bump map for each avaibile planet
        const bumpTexture = new THREE.TextureLoader().load('img/earth_bumpmap.jpg')
        material.bumpMap = bumpTexture
        material.bumpScale = 0.015


        planetMaterials.push(material);


    }); 
}