import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home.jsx";
import PokemonScreen from "./Components/PokemonScreen/PokemonScreen.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
