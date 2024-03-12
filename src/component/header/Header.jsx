import React from "react";
import Navebar from "../navebar/Navebar";
function Header() {
  return (
    <>
      <div className="w-[100vw] h-[600px] relative ">
        <img
          src="./images/image.jpg"
          className="w-screen h-screen bg-no-repeat bg-cover -z-30  "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-[150px] left-10 text-white font-serif text-[50px]">
          <p>Apno ko Apno </p>
          <p>Se Milaye</p>
          <p>Milan</p>
        </div>
      </div>
    </>
  );
}

export default Header;
