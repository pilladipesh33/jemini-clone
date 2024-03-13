/* eslint-disable @typescript-eslint/no-unused-vars */
import { SendHorizontal, User } from "lucide-react";
import { useContext } from "react";
import { Context } from "../../context/context";
import Logo from "../../../public/logo";
import { motion } from "framer-motion";

const Main = () => {
  const {
    loading,
    resultData,
    recentPrompt,
    setPromptValue,
    onSent,
    showValue,
    promptValue,
  } = useContext(Context);

  return (
    <div className="p-5 bg-[rgb(19,19,19)] w-full">
      <div className="navbar custom-flex">
        <h1 className="text-white text-xl font-body">Jeminai</h1>
        <p className="text-white">Person</p>
      </div>
      <div className="pt-[10dvh] px-[5dvh] flex flex-col justify-between min-h-[90dvh]">
        {!showValue ? (
          <div className="px-10">
            <h1 className="text-[3.5rem] leading-[4rem] font-semibold tracking-tight font-body bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 w-1/3">
              Hello, Dev
            </h1>
            <p className="text-[#666666] text-[3.5rem] leading-[4rem] font-semibold tracking-tight font-body">
              How can I help you today?
            </p>
          </div>
        ) : (
          <div className="text-white flex flex-col px-20">
            <div className="pb-10 flex justify-start items-start">
              <User className="h-7 w-7" />
              <span className="text-xl font-body font-medium pl-10">
                {recentPrompt}
              </span>
            </div>
            <div className="flex justify-start items-start">
              <Logo />
              {loading ? (
                <motion.div className="w-full flex flex-col px-10 gap-5">
                  <motion.hr className="loader-animate animate-pulse" />
                  <motion.hr className="loader-animate animate-pulse" />
                  <motion.hr className="loader-animate animate-pulse" />
                </motion.div>
              ) : (
                <motion.div className="overflow-hidden flex text-[1em]">
                  <motion.p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="pl-10 font-body text-white"
                  ></motion.p>
                </motion.div>
              )}
            </div>
          </div>
        )}
        <div className="text-white px-20 flex flex-col items-center">
          <div className="bg-[rgb(30,31,32)] h-[7dvh] w-full px-10 rounded-full flex justify-between items-center">
            <input
              className="text-lg font-body text-[#999999] bg-transparent w-full outline-0"
              placeholder="Enter a prompt here"
              value={promptValue}
              onChange={(e) => setPromptValue(e.target.value)}
            />
            {promptValue !== "" && (
              <div>
                <SendHorizontal
                  className="h-7 w-7 text-[#999999] cursor-pointer"
                  onClick={() => onSent()}
                />
              </div>
            )}
          </div>
          <p className="text-center text-[#999999] font-body mt-5">
            Jeminai may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
