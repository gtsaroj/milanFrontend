import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paymentRecive } from "../../../utils/UserAPIS/UserAPIS";
import ClipLoader from "react-spinners/ClipLoader";
import PaymentImg from "../../../../public/images/payment.jpeg";

function Payment() {
  const navigate = useNavigate();
  const [fileUploaded, setFileUploaded] = useState(null);
  let [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileUploaded(e.target.files[0]);
    } else {
      setFileUploaded(null);
    }
  };

  const message = () => {
    alert("After 2 hours Your Post Is Live Thanks For Visiting");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const username = localStorage.getItem("username");

      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("username", username);
      formData.append("image", fileUploaded);
      console.log("formData", formData);
      const response = await paymentRecive(formData);
      console.log("response", response);
      setLoading(false);
      navigate("/Home");
    } catch (error) {
      setLoading(true);
      console.log(error.message);
      setLoading(false);
    }
    console.log("fileUploaded", fileUploaded);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src={PaymentImg} className="w-70 h-80" alt="Your Image" />
        <p className="text-2xl font-bold text-red-500">
          <i className="bi bi-currency-rupee"></i>1999
        </p>
        <p>Please Scan This Qr Code And Make Payment</p>
        <p>
          After Payment Click{" "}
          <span className="text-green-500 font-bold">Done</span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={handleFileChange}
            placeholder="Upload payment screenshot"
          />
          <button
            onClick={message}
            className={`w-[200px] hover:bg-blue-700 mt-4 px-4 py-2 ${
              fileUploaded
                ? "bg-blue-500 text-white"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            } rounded`}
            disabled={!fileUploaded || loading} // Disable the button when loading
          >
            {loading ? (
              <ClipLoader color="#fff" loading={loading} size={20} />
            ) : (
              "Done"
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default Payment;
