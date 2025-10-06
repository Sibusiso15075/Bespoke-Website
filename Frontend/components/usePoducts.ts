import { useState, useMemo } from "react";
import { products as allProducts } from "../data/products.ts";

export function useProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("nav");

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply sorting based on selected filter
    switch (selectedFilter) {
      case "price_asc":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "rising":
        // For "rising", we'll sort by ID (newest first) as a proxy for trending
        filtered = filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case "nav":
      default:
        // Default ordering (by ID)
        filtered = filtered.sort((a, b) => a.id.localeCompare(b.id));
        break;
    }

    return filtered;
  }, [searchTerm, selectedFilter]);

  return {
    products: filteredProducts,
    searchTerm,
    setSearchTerm,
    selectedFilter,
    setSelectedFilter,
  };
}
