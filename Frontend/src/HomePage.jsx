import React from "react";
import "./App.css";
import ProductCard from "./ProductCard.tsx";
import "./Header.tsx";
import SearchBar from "./SearchBar.tsx";
import Header from "./Header.tsx";
import FilterBar from "./FilterBar.tsx";
import { useState, useEffect } from "react";
function HomePage() {
  const [products, setProducts] = useState([]);

  /*useEffect(() => {
    fetch(".Backend/Products.php")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    
  }, []);*/
  useEffect(() => {
    fetch("http://localhost/api.php")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data); // to confirm it’s received
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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

      <h3>New Arrivals</h3>

      <div className="Product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
