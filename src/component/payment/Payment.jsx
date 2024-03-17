import React, { useState } from "react";
import { Link } from "react-router-dom";

function Payment() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [value, setValue] = useState(0);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileUploaded(true);
    } else {
      setFileUploaded(false);
    }
  };
  const message = () => {
    alert("After 2 hours Your Post Is Live Thanks For Visiting");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src="/images/app.jpeg" className="w-70 h-80" alt="Your Image" />
        <p className="text-2xl font-bold text-red-500">
          <i class="bi bi-currency-rupee"></i>2999
        </p>
        <p>Please Scan This Qr Code And Make Payment</p>
        <p>
          After Payment Click{" "}
          <span className="text-green-500 font-bold">Done</span>
        </p>
        <input
          type="file"
          onChange={handleFileChange}
          placeholder="Upload payment screenshot"
        />
        <Link to="/Mainpage">
          <button
            onClick={message}
            className={`w-[200px] hover:bg-blue-700 mt-4 px-4 py-2 ${
              fileUploaded
                ? "bg-blue-500 text-white"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            } rounded`}
            disabled={!fileUploaded}
          >
            Done
          </button>
        </Link>
      </div>
    </>
  );
}

export default Payment;
