"use client";
import Link from "next/link";
import useCustomerSearch from "@/hooks/useCustomerSearch";
import { useEffect } from "react";

export default function Home() {
  const { setSearch, isInputted, filteredUsers, target, setTarget } =
    useCustomerSearch();

  console.log(target);

  return (
    <div className="flex flex-col w-[25%]">
      <select name="" id="" onChange={(e) => setTarget(e.target.value)}>
        <option value="store">Store</option>
        <option value="customer">Customer</option>
      </select>
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
