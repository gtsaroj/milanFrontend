import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cardsData } from "../cards/cardData";

function LiveDashbord() {
  return (
    <div>
      <div>
        <div></div>
        <div className="flex flex-wrap justify-between sm:justify-center  ">
          {cardsData.map((card, index) => (
            <div key={index}>
              <div className="w-[250px] h-[400px]  grid border border-solid border-gray-400 mt-[20px] rounded-lg m-8 hover:scale-110 ">
                <div className=" h-[200px]">
                  <img
                    src={card.image}
                    className="h-[180px] w-[200px]   rounded-xl  m-5 bg-black"
                  />
                </div>
                <div className="text-black font-bold m-1">
                  <p>Name: {card.name}</p>
                  <p>Age: {card.age}</p>
                  <p>City: {card.city}</p>
                  <div className="flex space-x-5  font-bold m-1 text-[20px]">
                    <p className="text-red-600 ">
                      <i class="bi bi-eye"></i> {card.views}{" "}
                      <span className="text-black ">Total views</span>
                    </p>
                    <p className="text-red-600 ">
                      <span>
                        <i class="bi bi-heart-fill"></i>
                      </span>
                      <label>
                        {card.Supporters}{" "}
                        <span className="text-black ">supporters</span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveDashbord;
