/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from "react";
import runChat from "../config/jeminai";

export const Context = createContext({});

type ContextProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProps) => {
  const [promptValue, setPromptValue] = useState<string>("");
  const [showValue, setShowValue] = useState<boolean>(false);
  const [recentPrompt, setRecentPrompt] = useState<string>("");
  const [prevPrompt, setPrevPrompt] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultData, setResultData] = useState<string>("");

  function DelayText(index: number, nextWord: string) {
    setTimeout(() => {
      setResultData((prev) => prev + " " + nextWord);
    }, 75 * index);
  }

  const onSent = async (prompt: string) => {
    setResultData("");
    setLoading(true);
    setShowValue(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, promptValue]);
      setRecentPrompt(promptValue);
      response = await runChat(promptValue);
    }
    // setRecentPrompt(promptValue);
    // setPrevPrompt((prev) => [...prev, promptValue]);
    // const response = await runChat(promptValue);
    const responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    const newResponse2 = newResponse.split("*").join("</br>");
    const newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      DelayText(i, nextWord);
    }
    // setResultData(newResponse2);
    setLoading(false);
    setPromptValue("");
  };
  const contextValue = {
    promptValue,
    onSent,
    setPromptValue,
    recentPrompt,
    setRecentPrompt,
    showValue,
    setShowValue,
    prevPrompt,
    setPrevPrompt,
    resultData,
    setResultData,
    loading,
    setLoading,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
