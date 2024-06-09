import React from "react";

function Artical() {
  return (
    <div className=" w-full flex flex-col items-center justify-center lg:h-[1000px] ">
      <div className=" w-full flex sm:flex-row flex-col  justify-around items-center mt-10">
        <img
          src=" /images/cuting.png"
          alt=""
          className="lg:w-[500px] sm:w-[200px]"
        />

        <p className=" lg:text-2xl sm:text-xl text-center mb-4">
          Over 40k women have gone missing in <br /> Gujarat in 5 years, says
          NCRB data
        </p>
      </div>
      <div className="flex sm:flex-row flex-col-reverse w-full  justify-around items-center mt-5">
        <p className=" lg:text-2xl sm:text-xl text-center mb-4">
          Tracing of missing persons is <br /> Relatively higher in southern
          indian states
        </p>
        <div className="sm:w-[500px] w-full">
        <img
          src=" /images/Map.avif"
          alt=""
          className="w-full h-full"
        />
      </div>
      </div>
    </div>
  );
}

export default Artical;
