import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { createData } from "../../../utils/UserAPIS/UserAPIS";
import ClipLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import Location from "../Locations/Locations";

const initialFormData = {
  name: "",
  age: "",
  address: "",
  hight: "",
  sex: "",
  holiya: "",
  date: "",
  time: "",
  imageone: "",
  imagetwo: "",
  place: "",
  others: "",
  prize: "",
  fathercontect: "",
  localstatiocontect: "",
};

function Post({ closeModal }) {
  const [loading, setLoading] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [fileUploadedone, setFileUploadedone] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  const handleFileChangeone = (e) => {
    setFileUploadedone(e.target.files[0]);
  };
  const handleFileChangetwo = (e) => {
    setFileUploaded(e.target.files[0]);
  };
  const handleCheckboxChange = (e) => {
    setCheck(e.target.checked);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(fileUploadedone);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (
      formData.localstatiocontect.length < 10 &&
      formData.fathercontect.length < 10
    ) {
      alert("Please enter valid number");
      return;
    }
    console.log(fileUploadedone);
    if (
      fileUploadedone?.name === fileUploaded?.name &&
      fileUploadedone &&
      fileUploaded
    ) {
      // setFileUploadedone();
      // setFileUploaded(null);
      setLoading(false);
      toast.error("Please Select two deferent images");
      return;
    }
    // console.log(event.target);
    // const myData = new FormData(formDataref.current);

    // console.log(myData);

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const myData = new FormData();
    myData.append("imageone", fileUploadedone);
    myData.append("imagetwo", fileUploaded);
    myData.append("userId", userId);

    Object.entries(formData).forEach(([key, value]) => {
      myData.append(key, value);
    });
    try {
      const response = await createData(myData, token);
      console.log("response", response.data);
      setShowLocationModal(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }

    setFormData(initialFormData);
    setFileUploadedone("");
    setFileUploaded("");
    setLoading(false);
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        className="lg:w-[40vw] lg:h-[75vh] sm:w-[80vw] sm:h-[50vh] border bg-white rounded p-4  overflow-hidden sm:overflow-auto "
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur z-40 "
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <div>
          <div onClick={closeModal}>
            <i class="bi bi-x-lg"></i>
          </div>
          <div className="text-center font-bold text-xl">
            <h1>Missing Post</h1>
          </div>
          <form onSubmit={handleSubmit}>
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className=" block text-sm font-medium leading-6 text-gray-900">
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Missing Person Photo 1
                </label>
                <div className="mt-2">
                  <input
                    id="imageone"
                    name="imageone"
                    type="file"
                    required
                    onChange={handleFileChangeone}
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Missing Person Photo 2
                </label>
                <div className="mt-2">
                  <input
                    id="imagetwo"
                    name="imagetwo"
                    type="file"
                    required
                    onChange={handleFileChangetwo}
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
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
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Local station number
                </label>
                <div className="mt-2">
                  <input
                    id="prize money"
                    name="localstatiocontect"
                    type="number"
                    required
                    value={formData.localstatiocontect}
                    onChange={handleChange}
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Father contact number
                </label>
                <div className="mt-2">
                  <input
                    id="prize money"
                    name="fathercontect"
                    type="number"
                    required
                    value={formData.fathercontect}
                    onChange={handleChange}
                    className="border  h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:text-[20px] sm:px-2 font-normal"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-red-700">
                Accept Terms and Conditions{" "}
              </label>
              <input
                type="checkbox"
                value={check}
                onChange={handleCheckboxChange}
                name="check"
                id="check"
              />
            </div>
            <div>
              <button
                type="submit"
                className={`border w-full h-10 mt-5 rounded bg-blue-500 text-white hover:bg-blue-700 hover:text-white ${
                  check
                    ? "bg-blue-500 text-white"
                    : "bg-gray-400 text-gray-600 cursor-not-allowed"
                }`}
                disabled={!check}
              >
                {loading ? (
                  <ClipLoader
                    color="black"
                    size={20}
                    aria-label="Loading Spinner"
                  />
                ) : (
                  "Post"
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
      {showLocationModal && (
        <Location closeModal={() => setShowLocationModal(false)} />
      )}
    </>
  );
}

export default Post;
