import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Plus, Star } from "lucide-react";

interface Product {
  id: string; // Ensure each product has a unique ID
  title: string;
  images: string[];
  description: string;
  rating: string;
  price: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <Card className="max-w-60 bg-[#1F1F1F] cursor-pointer hover:scale-105 transition-transform">
        <CardHeader className="flex justify-center items-center p-3">
          <Image src={product.images[0]} alt={product.title} height={120} width={120} className="w-40 h-40 " />
        </CardHeader>
        <CardContent className="p-3 py-0">
          <div className="flex gap-1">
            <Star color="#F1CF59" fill="#F1CF59" size={17} />
            <h1>{product.rating}</h1>
          </div>
          <h1 className="font-medium line-clamp-1">{product.title}</h1>
          <h2 className="line-clamp-1 py-1 text-zinc-400">{product.description}</h2>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-3 pt-0">
          <h1 className="font-semibold">{product.price}</h1>
          <Plus color="#F1CF59" size={17} />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;