import React, { useState } from "react";
import Modal from "react-modal";
import { loginUser } from "../../../utils/UserAPIS/UserAPIS";
import { useAuth } from "../../../useHook/useAuth";
import { toast } from "react-toastify";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/HashLoader";

function ModalLogin({ closeModal }) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
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
    try {
      setLoading(true);
      const response = await login(formData);
      console.log(response);
      toast.success(response.status);
      console.log("response.data", response.data);
      if (response.status === 200) {
        console.log(response.status);
      }
      // Handle successful login - Set user data in localStorage or perform other actions
      closeModal();
      setLoading(false);
    } catch (error) {
      setLoading(true);
      toast.error("Login failed: " + error.message);
      console.error("Login failed:", error.message);
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
      className="lg:w-[40vw] lg:h-[50vh] md:h-[50vh]  sm:w-[80vw] sm:h-[50vh] border bg-white rounded p-4 "
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
                  className="border h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
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
                  className="border h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="border w-full h-10 mt-5 rounded bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
            >
              {loading ? (
                <ClipLoader
                  color="black"
                  size={20}
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
