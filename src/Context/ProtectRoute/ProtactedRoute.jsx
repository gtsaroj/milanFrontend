import { Navigate } from "react-router-dom";
import { useAuth } from "../../useHook/useAuth";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to={"/register"} replace/>
};
export default ProtectedRoute;
