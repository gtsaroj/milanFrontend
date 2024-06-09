/* eslint-disable react/prop-types */
import { Radio } from "lucide-react";

const MissingCard = ({ card }) => {
    console.log(card)
  return (
    <div
    key={card.id}
    className="w-full w- bg-slate-50  flex flex-col items-center gap-4 justify-center border border-solid border-gray-400 rounded-lg "
  

  >
    <div className="bg-red-600 text-center w-[250px] py-4 rounded-t px-2">
    <h1 className="text-white text-3xl">MISSING</h1>
     </div>
    <div className="w-[200px] border-[2px] border-white h-[150px]">
      <img src={card.image} className="w-full h-full rounded" alt="" />
    </div>
    <div className="flex items-end justify-between w-full px-2 py-3">
    <div className="text-black flex   flex-col items-start gap-1 justify-center ">
      <p className="text-[14px] font-semibold">Name: {card.name}</p>
      <p className="text-[14px] font-semibold">Age: {card.age}</p>
      <p className="text-[14px] font-semibold">City: {card.city}</p>
     
    </div>
    <p className="text-red-600 size-6"><Radio/></p>
   </div>
  </div>
  )
}

export default MissingCard