import ReactDOM from 'react-dom'
import App from "./App"
import getData from "./GetData"
declare global {
    interface Window {
        selectedPlanet:string;
    }
}
window.selectedPlanet = '';

ReactDOM.render(<App></App>, document.getElementById('root'));
getData('mars');

