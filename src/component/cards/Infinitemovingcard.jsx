import React from "react";
import Marquee from "react-fast-marquee";
import { cardsData } from "./cardData";

import MissingCard from "./MissingCard";

function Infinitemovingcard() {

  return (
    <Marquee>
      <div className="flex items-center justify-center gap-3 py-5">
        {cardsData.map((card, index) => (
          <MissingCard card={card} key={index} />
        ))}
      </div>
    </Marquee>
  );
}

export default Infinitemovingcard;
