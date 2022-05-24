import ReactDOM from 'react-dom'
import App from "./App"
import GetDataHelper from "./helper/GetData"

ReactDOM.render(<App></App>, document.getElementById('root'));
let dataHelper = new GetDataHelper();
dataHelper.getData("mars");

