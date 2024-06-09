/* eslint-disable react/prop-types */
import { Eye, HeartHandshake, Radio } from "lucide-react";
const MissingCard2 = ({ card }) => {
  return (
    <div className="bg-slate-50  sm:w-auto flex flex-col items-center gap-4 justify-center border border-solid border-gray-400 rounded-lg ">
      <div className="bg-red-600 text-center sm:w-[250px] w-[350px] min-w-[300px] py-4 rounded-t px-2">
        <h1 className="text-white text-3xl">MISSING</h1>
      </div>
      <div className="sm:w-[200px] w-[300px]   border-[2px] border-white h-[200px] sm:h-[150px]">
        <img src={card.imageone} className="w-full h-full rounded" alt="" />
      </div>
      <div className="flex items-end justify-between gap-2 w-full px-2 py-3">
        <div className="text-black flex   flex-col items-start gap-1 justify-center ">
          <p className="text-[14px] font-semibold">Name: {card.name}</p>
          <p className="text-[14px] font-semibold">Age: {card.age}</p>
          <p className="text-[14px] font-semibold">Height: {card.hight}</p>
          <p className="text-[14px] font-semibold">
            Time: {card.date} {", "}
            {card.time}
          </p>
          <p className="text-[14px] font-semibold">City: {card.address}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <h1 className="text-sm hover:text-red-600 transition-all cursor-pointer text-gray-600 flex items-center justify-center gap-1">
            <Eye className="size-5" /> <span>{card.views}</span>
          </h1>
          <h2 className="text-sm hover:text-red-600 transition-all cursor-pointer text-gray-600 flex items-center justify-center gap-1">
            {" "}
            <HeartHandshake className="size-5" /> <span>{card.Supporters}</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MissingCard2;
