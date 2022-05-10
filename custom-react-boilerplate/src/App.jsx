import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import MainPage from "./pages/MainPage";
import Register from "./components/register/Registerform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="" exact element={<div>Home</div>} />
          <Route path="eco" element={<div>Eco</div>} />
          <Route path="vegitables" element={<div>Vegitables</div>} />
          <Route path="fruits" element={<div>Fruits</div>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
