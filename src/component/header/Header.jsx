import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Header() {
  return (
    <>
      <div className="w-[100vw] h-[600px] relative ">
        <img
          src=""
          className="w-screen h-screen bg-no-repeat bg-cover -z-30  "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-[150px] left-10 text-white font-serif lg:text-[4rem] sm:text-[3rem] md:text-left md:text-[4rem] font-extrabold lg:text-left sm:text-center  ">
          <p>Apno ko Apno </p>
          <p>Se Milaye</p>
          <span className="text-red-600 font-serif font-extrabold lg:text-left sm:text-center">
            <Typewriter
              words={["Milan"]}
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
