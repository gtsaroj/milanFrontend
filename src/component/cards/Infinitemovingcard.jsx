import React from "react";
import Marquee from "react-fast-marquee";
import { cardsData } from "./cardData";
import { Radio } from "lucide-react";

function Infinitemovingcard() {
  return (
    <Marquee>
      <div className="flex items-center justify-center gap-3 py-5">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full bg-slate-50  flex flex-col items-start gap-4 justify-center border border-solid border-gray-400 rounded-lg "
          >
            <div className="w-[200px] h-[150px]">
              <img src={card.image} className="w-full h-full rounded-t" alt="" />
            </div>
            <div className="flex items-end justify-between w-full px-2 py-3">
            <div className="text-black flex   flex-col items-start gap-1 justify-center ">
              <p className="text-[14px]">Name: {card.name}</p>
              <p className="text-[14px]">Age: {card.age}</p>
              <p className="text-[14px]">City: {card.city}</p>
             
            </div>
            <p className="text-red-600 size-6"><Radio/></p>
           </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export default Infinitemovingcard;
