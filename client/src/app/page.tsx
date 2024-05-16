"use client";
import useUser from "@/hooks/useUser";
import { useState, useCallback, useEffect } from "react";
import { Customer } from "@/interface/Customer";
import Link from "next/link";

export default function Home() {
  const { data } = useUser();
  const [search, setSearch] = useState("");
  const [isInputted, setIsInputted] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<Customer[]>([]);

  useEffect(() => {
    const filteredData = data?.filter((user) => {
      const userString =
        `${user.first_name} ${user.last_name} ${user.address}`.toLowerCase();
      const searchInput = search.toLowerCase();

      return userString.includes(searchInput);
    });
    setFilteredUsers(filteredData || []);

    if (search.length != 0) {
      setIsInputted(true);
    } else {
      setIsInputted(false);
    }
  }, [data, search]);

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
