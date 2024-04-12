import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 w-[100vw] h-[400px] grid items-center">
      <div className=" h-[100px] flex  justify-between items-center text-[15px] text-white ml-3 mr-10">
        <div className="leading-[50px]">
          <p>
            {" "}
            <span>Address- </span>243 Wokingham Road, Earley, Reading, Banglore.
          </p>
          <p>
            <span>Helpline- </span>+918303160798
          </p>
          <p>
            <span>Helpline- </span>+917897677046
          </p>
        </div>
        <div className="flex space-x-5">
          <p>
            <i className="bi bi-facebook"></i>
          </p>
          <p>
            <i className="bi bi-instagram"></i>
          </p>
          <p>
            <i className="bi bi-twitter"></i>
          </p>
          <p>
            <i className="bi bi-youtube"></i>
          </p>
        </div>
      </div>
      <div className="border border-black  h-[0.45px] text-center ml-5 mr-10">
        Copyright @ 2024
      </div>
    </div>
  );
}

export default Footer;
