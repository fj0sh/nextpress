"use client";
import { Button } from "@/components";
import { useXcontext } from "@/contexts";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

export default function Home() {
  const { X, mess } = useXcontext();

  useEffect(() => {
    console.log(X);
  }, [X]);

  return <div>{mess}</div>;
}
