import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 w-[100vw] h-[400px] grid items-center">
      <div className=" h-[100px] flex  justify-between items-center text-[15px] text-white ml-3 mr-10">
        <div className="leading-[50px]">
          <p>243 Wokingham Road, Earley, Reading, United Kingdom.</p>
          <p>+918303160798</p>
          <p>+917897677046</p>
        </div>
        <div className="flex space-x-1">
          <p>fb</p>
          <p>fb</p>
          <p>fb</p>
          <p>fb</p>
        </div>
      </div>
      <div className="border border-black  h-[0.45px] text-center ml-5 mr-10">
        Copyright @ 2024
      </div>
    </div>
  );
}

export default Footer;
