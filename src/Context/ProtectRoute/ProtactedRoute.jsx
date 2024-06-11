import { Navigate } from "react-router-dom";
import { useAuth } from "../../useHook/useAuth";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <div className="w-full h-[100vh] text-3xl flex items-center justify-center ">
    Unauthorized access
  </div>;
};
export default ProtectedRoute;
