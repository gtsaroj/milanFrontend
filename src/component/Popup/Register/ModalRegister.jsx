import React, { useState } from "react";
import Modal from "react-modal";
import { registerUser } from "../../../utils/UserAPIS/UserAPIS";
import ModalLogin from "../ModalLogin/ModalLogin";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/HashLoader";
import { useAuth } from "../../../useHook/useAuth";

function ModalRegister({ closeModal }) {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    number: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    number: "",
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
    setLoading(true);

    const newErrors = {};

    if (formData.number.length !== 10) {
      newErrors.number = "Enter a valid number (exactly 10 digits)";
    }
    if (!/^[a-zA-Z]+$/.test(formData.username)) {
      newErrors.username = "Username can only contain alphabetic characters";
    } else if (formData.username.length === 0) {
      newErrors.username = "Enter a valid name";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (
      formData.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Update errors state
    if (
      newErrors?.username ||
      newErrors?.number ||
      newErrors?.email ||
      newErrors?.password
    ) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // If there are errors, return early
    if (Object.keys(newErrors).length > 0) {
      setLoading(true);
      return;
    }
    try {
      setLoading(true);
      const response = await register(formData); // Assuming register returns a promise
      console.log("response", response);

      if (response && response.data) {
        toast.success(response.data.message);
        if (response.data.status === 200) {
          console.log(response.data.message);
        }
      } else {
        // Handle case where response or response.data is undefined
        console.log("Invalid response format:", response);
        toast.error("Invalid response format");
      }

      closeModal();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error); // Log the error for debugging
      toast.error(error.response ? error.response.data : "An error occurred"); // Display the error message from the server response, if available
    }
  };
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className=" xl:h[45vh] 2xl:h-[45vh] lg:w-[40vw] lg:h-[88vh] md:w-[40vw] md:h-[75vh] sm:w-[80vw] sm:h-[55vh] border bg-white rounded p-4"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur z-40 "
    >
      <div>
        <div onClick={closeModal}>
          <i class="bi bi-x-lg"></i>
        </div>
        <div className="text-center font-bold text-xl">
          <h1>Register</h1>
        </div>
        <form method="post" action="/" onSubmit={handleSubmit}>
          <div>
            <div>
              <label>User Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                  className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                />
              </div>
              {errors.username && (
                <label className="text-red-700 text-xs">
                  {errors.username}
                </label>
              )}
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="email">Email</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                />
              </div>
              {errors.email && (
                <label className="text-red-700 text-xs">{errors.email}</label>
              )}
            </div>

            <div className="sm:col-span-3">
              <label>Number</label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  className="border h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                />
              </div>
              {errors.number && (
                <label className="text-red-700 text-xs">{errors.number}</label>
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
                  color="black"
                  size={20}
                  aria-label="Loading Spinner"
                />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalRegister;
