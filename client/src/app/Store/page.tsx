"use client";
import React, { useEffect } from "react";
import useStore from "@/hooks/useStore";
const Store = () => {
  const { storeData } = useStore();

  useEffect(() => {
    console.log(storeData);
  }, [storeData]);

  return <div></div>;
};

export default Store;
