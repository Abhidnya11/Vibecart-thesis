import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
