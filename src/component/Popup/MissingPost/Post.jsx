import React, { useState } from "react";
import Modal from "react-modal";
import { createData } from "../../../utils/UserAPIS/UserAPIS";
import { useNavigate } from "react-router-dom";

function Post({ closeModal }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    hight: "",
    sex: "",
    holiya: "",
    date: "",
    time: "",
    place: "",
    others: "",
    imageone: "",
    imagetwo: "",
    prize: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createData(formData)
      .then((response) => {
        console.log(response);
        closeModal();
        navigate("/OffersPage");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Form submitted with data:", formData);
    closeModal();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      className="lg:w-[40vw] lg:h-[75vh] sm:w-[80vw] sm:h-[50vh] border bg-white rounded p-4  overflow-hidden sm:overflow-auto "
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur z-40 "
    >
      <div>
        <div onClick={closeModal}>
          <i class="bi bi-x-lg"></i>
        </div>
        <div className="text-center font-bold text-xl">
          <h1>Missing Post</h1>
        </div>
        <form method="post" action="/" onSubmit={handleSubmit}>
          <div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Age
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="age"
                  type="number"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Address
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Hight
              </label>
              <div className="mt-2">
                <input
                  id="hight"
                  name="hight"
                  type="number"
                  required
                  value={formData.hight}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Sex
              </label>
              <div className="mt-2">
                <input
                  id="sex"
                  name="sex"
                  type="text"
                  required
                  value={formData.sex}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Holiya
              </label>
              <div className="mt-2">
                <input
                  id="Holiya"
                  name="holiya"
                  type="text"
                  required
                  value={formData.holiya}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Date
              </label>
              <div className="mt-2">
                <input
                  id="Date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Time
              </label>
              <div className="mt-2">
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Place
              </label>
              <div className="mt-2">
                <input
                  id="place"
                  name="place"
                  type="text"
                  required
                  value={formData.place}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Others Details
              </label>
              <div className="mt-2">
                <input
                  id="others"
                  name="others"
                  type="text"
                  required
                  value={formData.others}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Photo 1
              </label>
              <div className="mt-2">
                <input
                  id="imageone"
                  name="imageone"
                  type="file"
                  required
                  value={formData.imageone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Missing Person Photo 2
              </label>
              <div className="mt-2">
                <input
                  id="imagetwo"
                  name="imagetwo"
                  type="file"
                  required
                  value={formData.imagetwo}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prize Money
              </label>
              <div className="mt-2">
                <input
                  id="prize money"
                  name="prize"
                  type="number"
                  required
                  value={formData.prize}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="border w-full h-10 mt-5 rounded bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default Post;
