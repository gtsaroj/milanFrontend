import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import RegisterPage from "./pages/Register/RegisterPage";
import PaymentPage from "./pages/payment/PaymentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Mainpage" />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
