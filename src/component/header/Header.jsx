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
        <div className="absolute top-[150px] left-10 text-white font-serif text-[4rem] font-extrabold ">
          <p>Apno ko Apno </p>
          <p>Se Milaye</p>
          <span className="text-red-600 font-serif font-extrabold">
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
