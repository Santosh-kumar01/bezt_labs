"use client";

import ProductCard from "@/components/Product/ProductCard";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import axios from "axios";
import React, { useState } from "react";

const fetcher = (url: string) => axios.get(url).then((res) => res.data.products);

const Page = () => {
  const categories = ["Donuts", "Ice-Cream", "Bomboloni"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const { data: products, error, isLoading } = useSWR("https://dummyjson.com/products", fetcher);

  if (error) return <p className="text-center mt-10">Failed to load products 😞</p>;
  if (isLoading) return <p className="text-center mt-10">Loading products... ⏳</p>;

  return (
    <div>
      <h1 className="font-serif text-4xl mt-14 mb-6">Product List</h1>

      <div className="flex gap-3 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            className={`rounded-xl hover:bg-[#F1CF59] text-[#696969] ${
              activeCategory === category ? "bg-[#F1CF59] text-[#1F1F1F]" : "bg-transparent"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div>
        <div className="grid grid-cols-2 gap-2">
          {products.length > 0 ? (
            products.map((product, index) => <ProductCard key={index} product={product} />)
          ) : (
            <p className="text-center col-span-2">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;