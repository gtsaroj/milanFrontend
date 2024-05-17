import React from "react";

function Instruction() {
  return (
    <div className="  w-full pb-16 flex flex-col items-center mt-5 gap-y-12 ">
      <div className="w-max">
        <span class="font-bold text-yellow-500 text-center text-[1.3rem]  md:text-4xl">
          Immediate solutions, less stress
        </span>
      </div>
      <div className="  w-[70vw] lg:flex sm:grid md:flex xl:flex h-full justify-around items-center ">
        <div className="flex flex-col gap-y-2 w-[18rem]">
          <span className="w-[2.5rem] rounded-md flex items-center justify-center border-[1px] border-gray-800 h-[2.5rem]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
              <path d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707-2-2 1.414-1.414 2 2z"></path>
            </svg>
          </span>
          <span className="pb-3 text-[1.3rem]  ">Register Missing</span>
          <span className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual.
          </span>
        </div>
        <div className="flex flex-col gap-y-2 w-[18rem]">
          <span className="w-[2.5rem] rounded-md flex items-center justify-center border-[1px] border-gray-800 h-[2.5rem]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 32 32"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 13 4 L 13 6 L 9 6 C 7.355469 6 6 7.355469 6 9 L 6 13 L 4 13 L 4 19 L 10 19 L 10 13 L 8 13 L 8 9 C 8 8.433594 8.433594 8 9 8 L 13 8 L 13 10 L 19 10 L 19 4 Z M 15 6 L 17 6 L 17 8 L 15 8 Z M 20 6 L 20 8 L 23 8 C 23.566406 8 24 8.433594 24 9 L 24 13 L 22 13 L 22 19 L 28 19 L 28 13 L 26 13 L 26 9 C 26 7.355469 24.644531 6 23 6 Z M 6 15 L 8 15 L 8 17 L 6 17 Z M 24 15 L 26 15 L 26 17 L 24 17 Z M 6 20 L 6 23 C 6 24.644531 7.355469 26 9 26 L 13 26 L 13 28 L 19 28 L 19 22 L 13 22 L 13 24 L 9 24 C 8.433594 24 8 23.566406 8 23 L 8 20 Z M 24 20 L 24 23 C 24 23.566406 23.566406 24 23 24 L 20 24 L 20 26 L 23 26 C 24.644531 26 26 24.644531 26 23 L 26 20 Z M 15 24 L 17 24 L 17 26 L 15 26 Z"></path>
            </svg>
          </span>
          <span className="pb-3  text-[1.3rem]  "> Select Location</span>
          <span className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual.
          </span>
        </div>
        <div className="flex flex-col gap-y-2 w-[18rem]">
          <span className="w-[2.5rem] rounded-md flex items-center justify-center border-[1px] border-gray-800 h-[2.5rem]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M12 13V9c0-.55-.45-1-1-1H7V6h5V4H9.5V3h-2v1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5v2h2.5v1h2v-1H11c.55 0 1-.45 1-1zM19.59 12.52l-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z"></path>
            </svg>
          </span>
          <span className="pb-3  text-[1.3rem]  ">
            your data viral in just minute
          </span>
          <span className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
