// Critical imports
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./components/Routes";

// Import of page compononents
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
                element={route.component}
              />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
