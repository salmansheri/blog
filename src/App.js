import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, CreatePost, Login } from "./pages";

import { Navbar } from "./components";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
