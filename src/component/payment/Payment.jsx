import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src="/images/app.jpeg" className="w-70 h-80" alt="Your Image" />
        <Link to="/Mainpage">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Done
          </button>
        </Link>
      </div>
    </>
  );
}

export default Payment;
