import { useState } from "react";
import Navebar from "./component/navebar/Navebar";
import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Main from "./component/main/Main";
import RegisterPage from "./pages/RegisterPage";
import Live from "./component/live/Live";
import Payment from "./component/payment/Payment";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

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
      <Footer />
    </>
  );
}

export default App;
