import Infinitemovingcard from "../cards/Infinitemovingcard";

function Live() {
  return (
    <div className="w-full h-[500px] overflow-hidden px-2 flex justify-center items-center bg-white">
      <div className=" to-blue-50 border-[1px]  shadow-inner shadow-gray-700 bg-gray-300 rounded w-full sm:w-full ">
        <Infinitemovingcard />
      </div>
    </div>
  );
}

export default Live;
