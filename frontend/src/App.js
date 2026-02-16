import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Poster from "./pages/Poster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poster" element={<Poster />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;