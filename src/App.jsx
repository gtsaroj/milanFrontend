import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import PaymentPage from "./pages/payment/Paymentstate/PaymentPage";
import Districtpage from "./pages/payment/paymentdistic/Districtpage";
import Paymentcitypage from "./pages/payment/paymentcity/Paymentcitypage";
import LivePage from "./pages/LivePage/LivePage";
import Dashbord from "./component/dashbord/Dashbord";
import { AuthProvider } from "./Context/AuthProvider/AuthProvider";
import ProtectedRoute from "./Context/ProtectRoute/ProtactedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/Mainpage" />} />
          <Route path="/Mainpage" element={<Mainpage />} />
          <Route
            path="/LivePage"
            element={
              <ProtectedRoute>
                <LivePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PaymentPage"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Districtpage"
            element={
              <ProtectedRoute>
                <Districtpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Paymentcitypage"
            element={
              <ProtectedRoute>
                <Paymentcitypage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Dashbord"
            element={
              <ProtectedRoute>
                <Dashbord />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
