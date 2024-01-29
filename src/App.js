import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/update/:Id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
