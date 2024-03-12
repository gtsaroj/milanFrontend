import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navebar from "./component/navebar/Navebar";
import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Register from "./component/users/Register";
import MainPage from "./pages/MainPage";
import FooterPage from "./pages/FooterPage";
import RegisterPage from "./pages/RegisterPage";
import Live from "./component/live/Live";

function App() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Navigate to="/MainPage" />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Live" element={<Live />} />
      </Routes>
    </>
  );
}

export default App;
