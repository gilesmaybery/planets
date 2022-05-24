import ListItem from './ListItem'
import CanvasScene from "./CanvasScene"
export default function Layout(props) {
    return (
      <>

  <div id='list'>
  <ListItem name="Earth" />
        <ListItem name="Jupiter" />
        <ListItem name="Mars" />
        <ListItem name="Mercury" />
        <ListItem name="Neptune" />
        <ListItem name="Pluto" />
        <ListItem name="Saturn" />
        <ListItem name="Uranus" />
        <ListItem name="Venus" />
        </div>      
        <CanvasScene/>
      </>

        

    );
};