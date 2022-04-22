import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./components/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="" exact element={<Home />} />
          <Route path="eco" element={<div>Eco</div>} />
          <Route path="vegitables" element={<div>Vegitables</div>} />
          <Route path="fruits" element={<div>Fruits</div>} />
        </Route>
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<div>register</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
