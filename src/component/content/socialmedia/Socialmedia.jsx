import { Chrome, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Socialmedia() {
  return (
    <div>
      <div className="w-full pb-16 bg-[#45c014] py-16 flex items-center justify-center">
        <div className="w-[90%] flex flex-col items-center gap-y-5 md:gap-y-12">
          <div className="flex flex-col items-center justify-center gap-y-5">
            <span className="font-bold text-center text-[1.3rem]  md:text-4xl">
              We have well estiblished network
              <br /> accross India.
            </span>
            <p className="text-sm md:text-[1rem] break-words  text-center w-[90vw] md:w-full">
              5000+ social media influencers network across India. and viral
              your post through social media.
            </p>
          </div>
          <div className="sm:w-[600px] w-full">
            <img
              className="w-full h-full rounded"
              src="/images/map.gif"
              alt="banner"
            />
          </div>
          <div className="list-none w-full flex items-center justify-around">
            <li><Facebook fill="blue" className=" text-blue-500 size-8"/></li>
            <li><Instagram fill="#c1558b" className="size-8 text-[#f3e357]"/></li>
            <li><Twitter  fill="#1DA1F2" className=" text-[#1DA1F2] size-8"/></li>
            <li><Linkedin fill="#1DA1F2" className=" text-[#1DA1F2] size-8" /></li>
            <li><Chrome fill="green" className="  text-red-500 size-8"/></li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socialmedia;
