import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTriggerComponent from "react-scroll-trigger";

function Happycounter() {
  const [counter, setCounter] = useState(false);
  return (
    <div>
      <div className="grid place-items-center w-full h-[50vh]  bg-white">
        <div className="flex justify-between m-10 w-[80vw]">
          <div className="text-center">
            <ScrollTriggerComponent
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl">
                {counter && (
                  <CountUp start={0} end={10} duration={2} delay={0} />
                )}
                K
              </span>
            </ScrollTriggerComponent>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
              Live users
            </p>
          </div>
          <div className="text-center">
            <ScrollTriggerComponent
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl">
                {counter && (
                  <CountUp start={0} end={50} duration={2} delay={0} />
                )}
                K
              </span>
            </ScrollTriggerComponent>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
              Happy users
            </p>
          </div>
          <div className="text-center">
            <ScrollTriggerComponent
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl">
                {counter && (
                  <CountUp start={0} end={20} duration={2} delay={0} />
                )}
                +
              </span>
            </ScrollTriggerComponent>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
              Cities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Happycounter;
