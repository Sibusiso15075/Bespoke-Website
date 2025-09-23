import { Product } from "./shared/types";
import React from "react";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3 group-hover:shadow-lg transition-shadow">
        <img
          src= "https://github.com/Sibusiso15075/Bespoke-Website/blob/b860fd8c771383d0a0d5b18c576abc19163b8ad8/Frontend/public/525051649_17846033274536509_6193107844236981155_n.jpg"
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium text-black leading-tight">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-black">R{product.price}</p>
      </div>
    </div>
  );
}
