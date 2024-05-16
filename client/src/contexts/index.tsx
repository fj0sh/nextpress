"use client";
import React, { useContext, useState } from "react";
import { createContext } from "react";

type Props = {
  children: React.ReactNode;
};

const Xcontext = createContext<any | undefined>(undefined);

const useXcontext = () => useContext(Xcontext);

const TempContext = (props: Props) => {
  const { children } = props;
  const [X, setX] = useState<boolean>();
  const [mess, setMess] = useState("message");

  return (
    <Xcontext.Provider value={{ X, setX, mess }}>{children}</Xcontext.Provider>
  );
};

export default TempContext;

export { useXcontext };
