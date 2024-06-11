import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Live from "../live/Live";
import Header from "../header/Header";
import Artical from "../content/articalsection/Artical";
import Socialmedia from "../content/socialmedia/Socialmedia";
import Happycounter from "../content/counter/Happycounter";
import SuccessStory from "../congresbord/SuccessStory";

function Main() {
  return (
    <div>
      <Header />
      <div className="w-full ">
        <div className="w-full ">
          <div className=" w-full bg-slate-800 py-16 flex items-center justify-center">
            <div className="w-[90%] text-white flex flex-col items-center gap-y-5 md:gap-y-12">
              <div className="flex flex-col items-center justify-center gap-y-5">
                <span className="font-bold text-center text-[1.3rem]  md:text-4xl">
                  Over 20 lakh people go missing
                  <br /> every year in India.
                </span>
                <p className="text-sm md:text-[1rem] break-words  text-center w-[90vw] md:w-full">
                  Invite the bot, pick a channel, and you're set—no custom code
                  needed, and no vendor lock-in.
                </p>
              </div>
              <div className="w-max">
                <img
                  className="w-[90vw] h-[10rem] md:w-[80vw] md:h-[30rem] rounded-md"
                  src="/images/CHILD-1.jpg"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
        <Artical />
        <Socialmedia />
        <Happycounter />
        <SuccessStory />
        <Live />
      </div>
    </div>
  );
}

export default Main;
