import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function SuccessStory() {
  return (
    <div className=" grid w-full ">
      <div className=" border bg-red-600 w-full h-[100px]">
        <h1 className="text-3xl font-bold mt-5 text-center">
          More then 30% Success Stories accrose india
        </h1>
      </div>
      {/* <div className="  w-full h-[700px] ">
        <div className="w-full border h-full flex justify-center items-center">
          <img src="/images/story1.jpeg" alt="" className="w-full h-full" />
        </div>
      </div> */}
      <div className="  w-full h-[700px]">
        <div className="w-full border h-full flex justify-center items-center">
          <img src="/images/story2.jpeg" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="  w-full h-[700px]">
        <div className="w-full border h-full flex justify-center items-center">
          <img src="/images/story3.jpeg" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="  w-full h-[700px]">
        <div className="w-full border h-full flex justify-center items-center">
          <img src="/images/story4.jpeg" alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default SuccessStory;
