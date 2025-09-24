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
          src="src/assets/Bespoke-white skate tee.jpg" //call product.image when available from db
          alt="shirt number 1"
          className="image
          "
        />
      </div>

      <div className="Product-info">
        <h3
          className="product-name" /*call product.name and product.price when available from db*/
        >
          shirt number 1
        </h3>
        <p className="product-price">R500</p>
      </div>

      <div className="purchase-cta">
        <button>Buy now</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
