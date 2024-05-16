"use client";
import useUser from "@/hooks/useUser";
import { useState, useCallback, useEffect } from "react";
import { Customer } from "@/interface/Customer";
import Link from "next/link";
import useSearch from "@/hooks/useSearch";

export default function Home() {
  const { setSearch, isInputted, filteredUsers } = useSearch();

  return (
    <div className="flex flex-col w-[25%]">
      <input
        type="text"
        className="border border-black p-2 rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        className={`border border-black shadow-lg z-10 ${
          isInputted ? "" : "hidden"
        }`}
      >
        {filteredUsers?.map((i) => (
          <Link key={i.customer_id} href={`Users/${i.customer_id}`}>
            <div>
              {i.first_name} {i.last_name} {i.address}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
