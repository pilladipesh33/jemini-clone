import { useState } from "react";

import {
  Menu,
  CircleHelp,
  History,
  Settings,
  Plus,
  MessageSquare,
} from "lucide-react";

export const SideBar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar min-h-[100dvh] inline-flex flex-col justify-between bg-[rgb(30,31,32)] p-5">
      <div className="top">
        <div className="flex flex-col mb-10 h-[70dvh]">
          <div
            className="h-8 w-8 rounded-full hover:bg-[rgb(68,71,70)] flex items-center justify-center"
            onClick={() => setExtended((prev) => !prev)}
          >
            <Menu className="h-6 w-6 block cursor-pointer text-white " />
          </div>
          <div className="newChat pt-10">
            {extended ? (
              <div className="h-10 w-full rounded-full bg-[rgb(19,19,19)] flex items-center justify-between px-4">
                <Plus className="h-6 w-6 block cursor-pointer text-[#666666]" />
                <p className="text-[#666666]">New Chat</p>
              </div>
            ) : (
              <div className="h-10 w-10 rounded-full bg-[rgb(19,19,19)] flex items-center justify-center">
                <Plus className="h-6 w-6 block cursor-pointer text-[#666666]" />
              </div>
            )}
          </div>
          {extended && (
            <div className="recent mt-10">
              <p className="text-white">Recent</p>
              <div className="recentEntry custom-flex mt-2">
                <MessageSquare className="h-5 w-8 text-white" />
                <p className="text-white">Recent Entries</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col mb-10">
        <div className="bottomItem flex items-center">
          <div className="hover-icon">
            <CircleHelp className="h-7 w-7 block cursor-pointer text-white" />
          </div>
          {extended && <p className="text-white">Help</p>}
        </div>
        <div className="bottomItem flex items-center mt-5">
          <div className="hover-icon">
            <History className="h-7 w-7 block cursor-pointer text-white" />
          </div>
          {extended && <p className=" hover:block text-white">History</p>}
        </div>
        <div className="bottomItem flex items-center mt-5">
          <div className="hover-icon">
            <Settings className="h-7 w-7 block cursor-pointer text-white" />
          </div>
          {extended && <p className="text-white">Setting</p>}
        </div>
      </div>
    </div>
  );
};
