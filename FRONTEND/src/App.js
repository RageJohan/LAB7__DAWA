// src/App.js

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Home from "./components/Home";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import NavBar from "./components/NavBar";
import AuthService from "./services/auth.service";

function App() {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    }
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        {currentUser && <Route path="/user" element={<BoardUser />} />}
        {showModeratorBoard && <Route path="/mod" element={<BoardModerator />} />}
        {showAdminBoard && <Route path="/admin" element={<BoardAdmin />} />}
      </Routes>
    </>
  );
}

export default App;
