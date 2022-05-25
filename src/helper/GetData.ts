
//BaseURL : https://images-api.nasa.gov/search?q=mars&media_type=image)
let baseUrl = "https://images-api.nasa.gov/search?q=";
let mediaTypeUrl = "&media_type=image";

// Used to retrieve data from the NASA API
// Example of one of the list items data
// Define a bunch of interfaces to the incoming data and then we can map the 
// collection of objects to the incoming response, this way we get type checking on incoming data.
/*


/* Example
center: "HQ"
date_created: "2019-05-31T00:00:00Z"
description: "The Mars celebration Friday, May 31, 2019, in Mars, Pennsylvania. NASA is in the small town to celebrate Mars exploration and share the agency’s excitement about landing astronauts on the Moon in five years. The celebration includes a weekend of Science, Technology, Engineering, Arts and Mathematics (STEAM) activities. Photo Credit: (NASA/Bill Ingalls)"
keywords: Array(3)
    0: "Mars"
    1: "Mars Celebration"
    2: "Pennsylvania"
    length: 3
    [[Prototype]]: Array(0)
location: "Mars, PA, USA"
media_type: "image"
nasa_id: "NHQ201905310026"
photographer: "NASA/Bill Ingalls"
title: "Mars Celebration"
*/

interface PlanetCollection{
    Collection : NASAData[];
}
interface NASAData{
Center : String;
DataCreated : String;
Description : String;
Keywords : String[];
Location : String;
MediaType : String;
NasaID : String;
Photographer : string;
Title : String;
}

interface PlanetItem{
    Data : NASAData;
    Href : String;
    Links : LinksData;
}

/* Example
href: "https://images-assets.nasa.gov/image/NHQ201905310026/NHQ201905310026~thumb.jpg"
rel: "preview"
render: "image"
*/
interface LinksData{
    Href : String,
    Rel : String,
    Render : String
}
class FetchDataHelper{
     getData(planetName : String){
        fetch(baseUrl + planetName + mediaTypeUrl)
        .then(response => {
            let jsonResponse = response.json();
            // Once the promise is fulfilled
            jsonResponse.then((collection)=>{
            // Here we would extract the data 
            })
        })
        .catch(error => {
            // Could have better error handling....
            console.log(error);
        });
    };
    
}

export default FetchDataHelper;