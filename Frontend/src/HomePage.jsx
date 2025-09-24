import React from "react";
import "./App.css";
import ProductCard from "./ProductCard.tsx";
import "./Header.tsx";
import SearchBar from "./SearchBar.tsx";
import Header from "./Header.tsx";
import FilterBar from "./FilterBar.tsx";

function HomePage() {
  return (
    <>
      <div className="header-container">
        <Header></Header>
        <div className="search-container">
          <SearchBar></SearchBar>
        </div>
        <div className="filterBar-container">
          <FilterBar></FilterBar>
        </div>
      </div>

      <p>
        <h3>New Arrivals</h3>
      </p>
      <div className="Product-container">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>

      <p>
        <h3>Tees</h3>
      </p>
      <div className="Product-container">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </>
  );
}

export default HomePage;
