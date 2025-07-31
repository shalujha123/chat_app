import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from 'react-hot-toast'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext"; 

const App = () => {
  const { authUser } = useContext(AuthContext);
  const { getUsers } = useContext(ChatContext);
  
  useEffect(() => {
    if (authUser) {
      getUsers();
    }
  }, [authUser]);

  return (
    <div className="bg-[url('/bgImage.svg')] bg-cover bg-no-repeat bg-center">
      <Toaster />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
