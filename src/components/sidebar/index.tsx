import React from "react";

import { assets } from "../../assets/assets";
import { Menu, CircleHelp, History, Settings, Plus } from "lucide-react";

export const SideBar = () => {
  return (
    <div className="sidebar min-h-[100dvh] w-[5dvw] inline-flex flex-col justify-between bg-[rgb(30,31,32)] p-5">
      <div className="top">
        <div className="flex flex-col items-center mb-10 h-[70dvh]">
          <div className="h-8 w-8 rounded-full hover:bg-[rgb(68,71,70)] flex items-center justify-center">
            <Menu className="h-6 w-6 block cursor-pointer text-white " />
          </div>
          <div className="newChat pt-10">
            <div className="h-10 w-10 rounded-full bg-[rgb(26,26,28)] flex items-center justify-center">
              <Plus className="h-6 w-6 block cursor-pointer text-slate-300" />
            </div>
            <p className="hidden">New Chat</p>
          </div>
          <div className="recent hidden">
            <p className="hidden">Recent</p>
            <div className="recentEntry custom-flex">
              <img src={assets.message_icon} alt="message" className="w-7" />
              <p className="hidden">Recent Entries</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <div className="bottomItem custom-flex">
          <div className="hover-icon">
            <CircleHelp className="h-7 w-7 block cursor-pointer text-white" />
          </div>
          <p className="hidden">Help</p>
        </div>
        <div className="bottomItem custom-flex mt-5">
          <div className="hover-icon">
            <History className="h-7 w-7 block cursor-pointer text-white" />
          </div>
          <p className="hidden hover:block text-white">History</p>
        </div>
        <div className="bottomItem custom-flex mt-5">
          <div className="hover-icon">
            <Settings className="h-7 w-7 block cursor-pointer text-white" />
          </div>
          <p className="hidden">Setting</p>
        </div>
      </div>
    </div>
  );
};
