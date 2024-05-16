"use client";
import useUser from "@/hooks/useUser";
import React, { useEffect, useState } from "react";

const userDetails = ({ params }: { params: { userId: string } }) => {
  const { data } = useUser();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>{params.userId}</div>;
};

export default userDetails;