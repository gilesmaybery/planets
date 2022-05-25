import { Texture, TextureLoader } from "three"
interface TextureList{
    list : TextureListElem[]
}

interface TextureListElem { 
    name : String,
    url : String,   
    type : String,  // Texture or map
}
/// An abstraction class for the three loader,
/// so that we can tell when the list of assets is finished loading

class Loader {
    private  loader : TextureLoader;
    private loadingComplete : boolean = false;
    public textures : Texture[] = [];
    
    constructor(){
        this.loader = new TextureLoader();
    }
    /*
    @name loadTextureList
    @param textureList : TextureList
    @desc Loads a list of texture and pushes them onto the textures property on the loader
    */
    loadTextureList(textureList :TextureList){
        for (var k = 0; textureList.list.length;k++){
            this.loader.load(textureList[k].url,function(texture : Texture){
                //Set Flags for complete, could be a better way
                if (k==textureList.list.length){
                    this.loadingComplete = true;    // Once last texture has been loaded
                }
                this.textures.push(texture);
            })
        }
    }

}