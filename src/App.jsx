import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navebar from "./component/navebar/Navebar";
import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Register from "./component/users/Register";
import Main from "./pages/MainPage";
import FooterPage from "./pages/FooterPage";
import RegisterPage from "./pages/RegisterPage";
import Live from "./component/live/Live";
import Payment from "./component/payment/Payment";

function App() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Navigate to="/Main" />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Live" element={<Live />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
