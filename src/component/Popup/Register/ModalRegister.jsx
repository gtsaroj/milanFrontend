import React, { useState } from "react";
import Modal from "react-modal";
import { registerUser } from "../../../utils/UserAPIS/UserAPIS";
import ModalLogin from "../ModalLogin/ModalLogin";
import { ToastContainer, toast } from "react-toastify";

function ModalRegister({ closeModal }) {
  const [formData, setFormData] = useState({
    username: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    registerUser(formData)
      .then((response) => {
        console.log(response);
        console.log("response.data", response.data);
        if (response.data.status === 200) {
          toast.success(response.data.message);
          console.log(response.data.message);
        }
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("username", response.data.username);
        window.localStorage.setItem("userId", response.data.userId);
        console.log("token", response.data.token);
        console.log("username", response.data.username);
        console.log("userId", response.data.userId);
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Form submitted with data:", formData);
    // Close the modal after form submission
    closeModal();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className="lg:w-[40vw] lg:h-[75vh] sm:w-[80vw] sm:h-[50vh] border bg-white rounded p-4"
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
                  className="border h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
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
                  className="border h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
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
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </Modal>
  );
}

export default ModalRegister;
