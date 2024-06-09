import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cardsData } from "../cards/cardData";
import MissingCard2 from "../cards/MissingCard2";

function LiveDashbord() {
  return (
    <div className=" w-full py-5 gap-3 flex justify-center items-center flex-wrap  ">
      {cardsData.map((card, index) => (
        <MissingCard2 card={card} key={index} />
      ))}
    </div>
  );
}

export default LiveDashbord;
