import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Scrolers from "../cards/IconsScrolers/Scrolers";
import Instruction from "./instruction/Instraction";
function Header() {
  return (
    <>
      <div className="w-full h-[600px] relative  ">
        <img
          src="/images/misssing.jpg"
          className="w-[100vw] overflow-hidden  bg-cover bg-no-repeat  brightness-50 h-[60vh] md:w-[100vw] md:h-[100vh]   "
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        <div className=" flex  text-white  z-10 top-[25%] px-3  md:left-[15%]  absolute flex-col gap-y-3 md:gap-y-5 items-center  ">
          <span className="font-bold  bg-gradient-to-r from-[#E4A11B] to-[#D42A46] bg-clip-text text-transparent text-center  text-[1.8rem]   md:text-[4.5rem]">
            <Typewriter
              words={["APNO KO APNO SE MILAYE"]}
              loop={1000}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="grid justify-center">
            <div>
              <p class="text-white text-center text-sm md:leading-[2rem] md:text-[1.4rem] break-words">
                Miilan is a platform dedicated to spreading missing person
                details
                <br />
                virally through social media.
              </p>
            </div>
            <br />
            <div className="flex justify-center">
              <button
                type="button"
                class="text-white group flex justify-center items-center bg-yellow-600 hover:bg-yellow-700 bg-gradient-to-r from-[#E4A11B] to-[#D42A46] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:text-[1.2rem] w-[10rem] md:w-[13rem] h-[3rem] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Register missing{" "}
                <span class="group-hover:translate-x-1 duration-200 ease-out">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Instruction />
    </>
  );
}

export default Header;
