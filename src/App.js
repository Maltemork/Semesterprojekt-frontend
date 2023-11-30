// Critical imports
import './App.css';
import { getData } from "./crud/getData.js";
// import { Route, IndexRoute } from 'react-router';

// Import of page compononents
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

let sponsorsArray = {};

window.addEventListener("load", initFunction);

// Initial function on app load.
async function initFunction() {
  sponsorsArray = await getData("sponsors");
  console.log(sponsorsArray);
}


// Main app function
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}



export default App;
