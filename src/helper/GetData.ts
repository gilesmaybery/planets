
//BaseURL : https://images-api.nasa.gov/search?q=mars&media_type=image)
let baseUrl = "https://images-api.nasa.gov/search?q=";
let mediaTypeUrl = "media_type=image";

// Used to retrieve data from the NASA API
// 

interface planetData{

}
class FetchDataHelper{

     getData(planetName : String){
        fetch(baseUrl + planetName + mediaTypeUrl)
        .then(response => {
            let jsonResponse = response.json();
            console.log(jsonResponse);
        })
        .catch(error => {
            // Could have better error handling....
            console.log(error);
        });
    };
    
}

export default FetchDataHelper;