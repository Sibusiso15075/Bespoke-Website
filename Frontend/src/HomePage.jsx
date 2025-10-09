import React from "react";
import "./App.css";
import ProductCard from "./ProductCard.tsx";
import "./Header.tsx";
import SearchBar from "./SearchBar.tsx";
import Header from "./Header.tsx";
import FilterBar from "./FilterBar.tsx";
import { useProducts } from "../hooks/useProducts.ts";
import { useState } from "react";

function HomePage() {
  const [isMenuOpen, setIsOpen] = useState(false);
  const {
    products,
    searchTerm,
    setSearchTerm,
    selcetedFilter,
    setSelectedFilter,
  } = useProducts();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="header-container">
        <Header onMenuClick={handleMenuClick}></Header>
        <div className="search-container">
          <SearchBar searchTerm={searchTerm}></SearchBar>
        </div>
        <div className="filterBar-container">
          <FilterBar
            selectedFilter={selcetedFilter}
            onFilterChange={setSelectedFilter}
          ></FilterBar>
        </div>
      </div>

      <div className="products">
        <h3>New Arrivals</h3>

        <div className="Product-container">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>

        <h3>Tees</h3>

        <div className="Product-container">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </>
  );
}

export default HomePage;
