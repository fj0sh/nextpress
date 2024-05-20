"use client";
import Link from "next/link";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const { setSearch, isInputted, filteredUsers } = useSearch();
  const { productData } = useProducts();

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  return (
    <div className="flex flex-col">
      <div className="w-[25%]">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="border border-black"
        />
      </div>

      <div>
        {filteredUsers?.map((products) => (
          <div key={products.product_id}>{products.product_name}</div>
        ))}
      </div>
    </div>
  );
}
