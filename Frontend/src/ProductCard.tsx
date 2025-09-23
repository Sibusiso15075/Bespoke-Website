import { Product } from "./shared/types";
import React from "react";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="Product-container">
      <div
        className="Product-image" /*className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3 group-hover:shadow-lg transition-shadow"*/
      >
        <img
          src="src/assets/bespoke-white-front.jpg"
          alt="shirt number 1"
          className="image
          "
        />
      </div>

      <div className="Product-info">
        <h3 className="text-sm font-medium text-black leading-tight">
          shirt number 1
        </h3>
        <p className="text-sm font-semibold text-black">R500</p>
      </div>
    </div>
  );
}
