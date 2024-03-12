import React from "react";
import Marquee from "react-fast-marquee";

function Infinitemovingcard() {
  return (
    <div>
      <Marquee>
        <div className="flex m-2">
          <div className="w-[220px] h-[350px] grid border border-solid border-gray-400 mt-[20px] rounded-lg ">
            <div className=" h-[130px]">
              <img
                src="https://media.istockphoto.com/id/984020348/photo/child-playing-outdoor-in-the-nature.jpg?s=612x612&w=0&k=20&c=ZfvQhe5JzflKcaJKSTGTJQFCVDR5SHmvsBPDFFt5M2U="
                className="h-[180px] w-[200px] m-2 rounded-xl bg-black"
              />
            </div>
            <div className="text-black font-bold m-1">
              <p> Name:Rani gonday</p>
              <p> Age:11y</p>
              <p>City:Jaipur</p>
            </div>
          </div>
          <div className="w-[220px] h-[350px] grid border border-solid border-gray-400 mt-[20px] rounded-lg ">
            <div className=" h-[130px]">
              <img
                src="https://media.istockphoto.com/id/1129356797/photo/teenage-girl-sitting-on-the-grass-outdoor-in-the-nature.webp?b=1&s=170667a&w=0&k=20&c=5_BysZGbMq6YoU-w-khTAaLhzTXg0hZs773-45mys0s="
                className="h-[180px] w-[200px] m-2 rounded-xl bg-black"
              />
            </div>
            <div className="text-black font-bold m-1">
              <p> Name:salu sha</p>
              <p> Age:8y</p>
              <p>City:Delhi</p>
            </div>
          </div>
          <div className="w-[220px] h-[350px] grid border border-solid border-gray-400 mt-[20px] rounded-lg ">
            <div className=" h-[130px]">
              <img
                src="https://media.istockphoto.com/id/1192037506/photo/young-indian-farmer-standing-and-inspecting-crops-in-paddy-field.webp?b=1&s=170667a&w=0&k=20&c=R9StnJGfVOlaOmhfADFcy0wAmlkNyCmuNmNI29-LWuc="
                className="h-[180px] w-[200px] m-2 rounded-xl bg-black"
              />
            </div>
            <div className="text-black font-bold m-1">
              <p> Name:Rahul singh</p>
              <p> Age:20y</p>
              <p>City:Nagpur</p>
            </div>
          </div>
          <div className="w-[220px] h-[350px] grid border border-solid border-gray-400 mt-[20px] rounded-lg ">
            <div className=" h-[130px]">
              <img
                src="https://images.unsplash.com/photo-1640583818579-740430212d27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHZpbGxhZ2UlMjBtZW58ZW58MHx8MHx8fDA%3D"
                className="h-[180px] w-[200px] m-2 rounded-xl bg-black"
              />
            </div>
            <div className="text-black font-bold m-1">
              <p> Name:Sakir</p>
              <p> Age:56y</p>
              <p>City:Delhi</p>
            </div>
          </div>
          <div className="w-[220px] h-[350px] grid border border-solid border-gray-400 mt-[20px] rounded-lg ">
            <div className=" h-[130px]">
              <img
                src="https://images.unsplash.com/photo-1609252509102-aa73ff792667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHZpbGxhZ2UlMjBtZW58ZW58MHx8MHx8fDA%3D"
                className="h-[180px] w-[200px] m-2 rounded-xl bg-black"
              />
            </div>
            <div className="text-black font-bold m-1">
              <p> Name:Raja Ram</p>
              <p> Age:52y</p>
              <p>City:Varanasi</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Infinitemovingcard;
