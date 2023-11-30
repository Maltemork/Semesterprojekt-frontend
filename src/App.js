// Critical imports
import "./App.css";
import { getData } from "./crud/getData.js";
// import { Route, IndexRoute } from 'react-router';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./components/Routes";

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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="routeContent">
          <Routes>
            {AppRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.Element />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
