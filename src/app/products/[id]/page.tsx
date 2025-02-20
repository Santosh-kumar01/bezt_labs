"use client"; // Ensure this runs on the client side

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, CircleMinus, CirclePlus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const Page = () => {
  const router = useRouter();
  const { id: productId } = useParams(); // Destructure directly
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (productId) fetchProductsData();
  }, [productId]);

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="h-full w-full relative">
      <div className="py-7">
        <button onClick={() => router.push("/products")}>
          <ChevronLeft />
        </button>
      </div>
      <div className="flex justify-center items-center mt-14 py-5">
        <Image src={product.images[0]} alt={product.title} height={300} width={300} priority className="w-80 h-80" />
      </div>
      <div>
        <div className="flex justify-between gap-2 mt-4">
          <h1 className="font-medium text-xl py-1">{product.title}</h1>
          <div className="flex gap-2">
            <Star color="#F1CF59" fill="#F1CF59" size={20} />
            <h1>{product.rating}</h1>
          </div>
        </div>
        <h2 className="line-clamp-3 max-w-80 text-zinc-400">{product.description}</h2>
      </div>
      <div className="flex justify-between items-center p-3 pt-0 py-8 mt-6">
        <div className="flex gap-4">
          <CircleMinus color="#f8f359" />
          <h1>1</h1>
          <CirclePlus color="#f8f359" />
        </div>
        <h1>${product.price}</h1>
      </div>

      <Button className="absolute bottom-5 w-full bg-[#F1CF59] py-5 text-lg rounded-lg">
        Add to Cart
      </Button>
    </div>
  );
};

export default Page;