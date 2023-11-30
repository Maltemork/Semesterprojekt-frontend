// Critical imports
import "./App.css";
import { BrowserRouter } from "react-router-dom";

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
      </div>
    </BrowserRouter>
  );
}

export default App;
