import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  const message = () => {
    alert("After 2 hours Your Post Is Live Thanks For Visiting");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src="/images/app.jpeg" className="w-70 h-80" alt="Your Image" />
        <p className="text-2xl font-bold text-red-500">
          <i class="bi bi-currency-rupee"></i>4000
        </p>
        <p>Please Scann This Qr Code And Make Payment</p>
        <p>
          After Payment Click{" "}
          <span className="text-green-500 font-bold">Done</span>
        </p>
        <Link to="/Mainpage">
          <button
            onClick={message}
            className=" w-[200px] hover:bg-blue-700 mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Done
          </button>
        </Link>
      </div>
    </>
  );
}

export default Payment;
