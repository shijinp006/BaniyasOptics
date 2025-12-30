import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./components/shop";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
