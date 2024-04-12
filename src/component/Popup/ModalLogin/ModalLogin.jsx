import React, { useState } from "react";
import Modal from "react-modal";
import { useAuth } from "../../../useHook/useAuth";
import { toast } from "react-toastify";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function ModalLogin({ closeModal }) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  let [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (
      formData.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Update errors state
    setErrors(newErrors);

    // If there are errors, return early
    if (Object.keys(newErrors).length > 0) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const response = await login(formData);
      console.log(response);
      toast.success(response.data.message);
      window.localStorage.setItem("username", response.data.username);
      console.log("username", response.data.username);
      console.log("response.data", response.data);
      if (response.status === 200) {
        console.log(response.status);
      }
      // Handle successful login - Set user data in localStorage or perform other actions
      closeModal();
      setLoading(false);
    } catch (error) {
      setLoading(true);
      toast.error("Login failed");
      console.error("Login failed:", error);
      // Handle login error - Display error message to the user or perform other actions
      console.log("Form submitted with data:", formData);

      closeModal();
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className="lg:w-[40vw] lg:h-[55vh] md:h-[55vh]  sm:w-[80vw] sm:h-[55vh] border bg-white rounded p-4 "
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur z-40 "
    >
      <div>
        <div onClick={closeModal}>
          <i class="bi bi-x-lg"></i>
        </div>
        <div className="text-center font-bold text-xl">
          <h1>Login</h1>
        </div>
        <form method="post" action="/" onSubmit={handleSubmit}>
          <div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name">Email</label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                  className="border h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                />
              </div>
              {errors.email && (
                <label className="text-red-700 text-xs">{errors.email}</label>
              )}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email">Password</label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="border h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                />
              </div>
              {errors.password && (
                <label className="text-red-700 text-xs">
                  {errors.password}
                </label>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="border w-full h-10 mt-5 rounded bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
            >
              {loading ? (
                <ClipLoader
                  color="white"
                  size={30}
                  aria-label="Loading Spinner"
                />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalLogin;
