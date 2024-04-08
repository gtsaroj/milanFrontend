import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  } else {
    throw new Error("Something is wrong with auth context");
  }
};
