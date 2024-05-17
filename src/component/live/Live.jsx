import React from "react";
import Infinitemovingcard from "../cards/Infinitemovingcard";

function Live() {
  return (
    <div className="w-full h-[500px] flex justify-center items-center bg-white">
      <div className="border border-black lg:w-[70vw] sm:w-full ">
        <Infinitemovingcard />
      </div>
    </div>
  );
}

export default Live;
