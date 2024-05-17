import React from "react";

function Artical() {
  return (
    <div className=" w-full lg:h-[1000px]   items-center">
      <div className="flex  justify-around items-center mt-10">
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
      <div className="flex  justify-around items-center mt-5">
        <p className=" lg:text-2xl sm:text-xl text-center mb-4">
          Tracing of missing persons is <br /> Relatively higher in southern
          indian states
        </p>
        <img
          src=" /images/Map.avif"
          alt=""
          className="lg:w-[500px] sm:w-[200px]"
        />
      </div>
    </div>
  );
}

export default Artical;
