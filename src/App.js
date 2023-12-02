// Critical imports
import "./App.css";
// import { Route, IndexRoute } from 'react-router';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes, AddSectionRoutes } from "./components/Routes";

// Import of page compononents
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const allRoutes = [...AppRoutes, ...AddSectionRoutes];

// Main app function
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="routeContent">
          <Routes>
            {allRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
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
