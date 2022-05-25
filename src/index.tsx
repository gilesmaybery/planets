import ReactDOM from 'react-dom'
import App from "./App"
import GetDataHelper from "./helper/GetData"

// Add the app to the root so we can render things
ReactDOM.render(<App></App>, document.getElementById('root'));

// Just testing the GetDataHelper 
let dataHelper = new GetDataHelper();
dataHelper.getData("mars");

