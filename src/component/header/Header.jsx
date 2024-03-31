import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Header() {
  return (
    <>
      <div className="w-[100vw] h-[600px] relative  ">
        {/* <img
          src=""
          className="w-screen h-screen bg-no-repeat bg-cover -z-30  "
        /> */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        <div className="absolute top-[150px] left-10 text-blue-600 font-serif lg:text-[4rem] sm:text-[2.5rem] sm:m-1 sm:p-1 md:text-left md:text-[4rem] font-extrabold lg:text-left sm:text-center  ">
          <p>APNO KO APNO </p>
          <p>SE MILAYE</p>
          <span className="text-red-600 font-serif font-extrabold lg:text-left sm:text-center">
            <Typewriter
              words={["MIILAN"]}
              loop={1000}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
