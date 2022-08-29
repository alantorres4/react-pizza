import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import Pizza from "./components/Pizza";
import SandwichesPasta from './components/SandwichesPasta';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/SandwichesPasta" element={<SandwichesPasta />} />

        <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
    </>
  );

}



export default App;
