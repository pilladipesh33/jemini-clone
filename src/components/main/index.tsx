import { SendHorizontal } from "lucide-react";
import React from "react";

const Main = () => {
  return (
    <div className="p-5 bg-[rgb(19,19,19)] w-full">
      <div className="navbar custom-flex">
        <h1 className="text-white text-xl font-body">Jeminai</h1>
        <p className="text-white">Person</p>
      </div>
      <div className="p-[10dvh] flex flex-col justify-between h-[90%]">
        <div className="px-10">
          <h1 className="text-[3.5rem] leading-[4rem] font-semibold tracking-tight font-body bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 w-1/4">
            Hello, Dev
          </h1>
          <p className="text-[#666666] text-[3.5rem] leading-[4rem] font-semibold tracking-tight font-body">
            How can I help you today?
          </p>
        </div>
        <div className="text-white px-20">
          <div className="bg-[rgb(30,31,32)] h-[7dvh] px-10 rounded-full flex justify-between items-center">
            <p className="text-lg font-body text-[#999999]">
              Enter a prompt here
            </p>
            <div>
              <SendHorizontal className="h-7 w-7 text-[#999999]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
