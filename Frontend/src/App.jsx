import Header from "./Header.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FilterBar from "./FilterBar.tsx";
import SearchBar from "./SearchBar.tsx";
import ProductCard from "./ProductCard.tsx";
import HomePage from "./HomePage.jsx";
import ProductDetail from "./ProductDetail.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
