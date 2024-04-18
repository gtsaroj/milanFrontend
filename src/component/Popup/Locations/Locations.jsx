import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addLocation } from "../../../utils/UserAPIS/UserAPIS";
import Modal from "react-modal";

function Locations({ closeModal }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    area: "state", // Default value
    areaName: "",
    termsAccepted: false, // Default value for checkbox
  });

  const handleLocationTypeChange = (e) => {
    setFormData({ ...formData, area: e.target.value });
  };

  const handleLocationNameChange = (e) => {
    setFormData({ ...formData, areaName: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the checkbox is checked
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    if (formData.area === "state") {
      navigate(`/paymentPage`);
    } else if (formData.area === "district") {
      navigate(`/DistrictPage`);
    } else if (formData.area === "city") {
      navigate(`/Paymentcitypage`);
    }

    try {
      const username = localStorage.getItem("username");
      const userId = localStorage.getItem("userId");
      const response = await addLocation(formData);
      console.log(response);
    } catch (error) {
      console.log(error.message);
      alert("somthing worng", error);
    }
  };

  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        className="lg:w-[40vw] lg:h-[70vh] sm:w-[80vw] sm:h-[55vh] border bg-white rounded p-4"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur z-40"
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <div className="text-center">
          <form onSubmit={handleSubmit}>
            <div className="text-center font-serif font-bold text-[30px]">
              <p>Enter your location</p>
            </div>
            <div className="relative inline-block">
              <select
                className="text-center font-serif text-15px mt-5 w-350px border border-black rounded-md px-5 py-3 appearance-none"
                value={formData.area}
                onChange={handleLocationTypeChange}
              >
                <option value="state">State</option>
                <option value="district">District</option>
                <option value="city">City</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 1.414L10 11.414l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  />
                </svg>
              </div>
            </div>
            <br />
            <label>
              <input
                type="text"
                placeholder="Enter location name"
                className="block w-full rounded-md border-0 py-1.5 sm:mt-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 sm:text-[20px] sm:px-2 font-normal"
                value={formData.areaName}
                onChange={handleLocationNameChange}
              />
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
              />
              Accept Terms and Conditions
            </label>
            <br />
            <button
              className="w-full h-[40px] border bg-blue-500 hover:bg-blue-700 text-white mt-10"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Locations;
