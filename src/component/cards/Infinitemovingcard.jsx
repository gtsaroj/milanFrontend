import React from "react";
import Marquee from "react-fast-marquee";
import { cardsData } from "./cardData";

function Infinitemovingcard() {
  return (
    <div>
      <Marquee>
        <div className="flex m-2">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="w-[220px] h-[350px] grid border border-solid border-gray-400 mt-[20px] rounded-lg "
            >
              <div className=" h-[130px]">
                <img
                  src={card.image}
                  className="h-[180px] w-[200px] m-2 rounded-xl bg-black"
                  alt=""
                />
              </div>
              <div className="text-black font-bold m-1">
                <p>Name: {card.name}</p>
                <p>Age: {card.age}</p>
                <p>City: {card.city}</p>
                <p className="text-red-600 font-bold m-1  text-[20px]">Live.</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Infinitemovingcard;
