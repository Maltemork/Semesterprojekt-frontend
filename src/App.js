// Critical imports
import './App.css';
// import { Route, IndexRoute } from 'react-router';

// Import of page compononents
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
