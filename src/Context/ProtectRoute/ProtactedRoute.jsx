import { Navigate } from "react-router-dom";
import { useAuth } from "../../useHook/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (user !== null) {
    return children;
  } else {
    return <Navigate to="/Mainpage" />;
  }
};
export default ProtectedRoute;
