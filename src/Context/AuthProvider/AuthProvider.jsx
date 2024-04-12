import { createContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../../utils/UserAPIS/UserAPIS";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        console.log("token", localStorage.getItem("token"));
        setUser(localStorage.getItem("token"));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const register = async (formData) => {
    try {
      const response = await registerUser(formData);
      setUser(response.data); // Assuming your response contains user data
      setError(null);
      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const login = async (formData) => {
    try {
      const response = await loginUser(formData);
      setUser(response.data); // Assuming your response contains user data
      setError(null);
      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("userId");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, error, login, logout, register }}>
      {loading ? <p>Loading ...</p> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
