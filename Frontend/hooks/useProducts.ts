import { useState, useMemo } from "react";

import { products as allProducts } from "../data/products.ts";
import { products } from "../data/products.ts";

export function useProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("new");

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Apply sorting based on selected filter
  switch (selectedFilter) {
    case "price_asc":
      filtered = filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      filtered = filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "new":
      filtered = filteredProducts.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
      break;
    default:
      // Default ordering (byID)
      filtered = filtered.sort((a, b) => a.id.LocaleCompare(b.id));
      break;
  }

  return {
    products: filteredProducts,
    searchTerm,
    setSearchTerm,
    selectedFilter,
    setSelectedFilter,
  };
}
