import { Product } from "./shared/types";
import React from "react";
import { useState, useEffect } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="Product-container">
      <div className="card">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        {/* <p>{product.description}</p> */}
        <img src={"Frontend/src/assets/" + product.image} alt={product.name} />
        <button>Add to Cart</button>
        <button>Buy now</button>
      </div>
    </div>
  );
}
