import React from "react";
import Marquee from "react-fast-marquee";

function Scrolers() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Social Media</h1>
      <Marquee speed={40} delay={0}>
        <div className=" flex items-center  w-[100vw] h-[70px] justify-evenly">
          <div className="image_wrapper m-10">
            <img src="/images/facebook.png" alt="" className="w-[50px]" />
          </div>
          <div className="image_wrapper m-5">
            <img src="/images/instagram.png" alt="" className="w-[50px]" />
          </div>
          <div className="image_wrapper m-5">
            <img src="/images/linkedin.png" alt="" className="w-[50px]" />
          </div>
          <div className="image_wrapper m-5">
            <img src="/images/twitter.png" alt="" className="w-[50px]" />
          </div>
          <div>
            <img src="/images/youtube.png" alt="" className="w-[50px]" />
          </div>
          <div className="image_wrapper m-5">
            <img src="/images/search (2).png" alt="" className="w-[50px]" />
          </div>
          <div className="image_wrapper m-5">
            <img src="/images/threads.png" alt="" className="w-[50px]" />
          </div>
          <div className="image_wrapper m-5 ">
            <img src="/images/pinterest.png" alt="" className="w-[50px]" />
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Scrolers;
