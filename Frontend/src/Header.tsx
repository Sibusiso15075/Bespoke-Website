import { Menu } from "lucide-react";
import ProductCard from "./ProductCard.tsx";
import { Product } from "./shared/types.ts";
import FilterBar from "./FilterBar.tsx";
import SearchBar from "./SearchBar.tsx";
import React from "react";
import "./App.css";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="Header">
      <div className="header-container">
        <h1>"BESPOKE"</h1>
        <br />
        <p>Where style meets creativity!</p>
      </div>

      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-black" />
      </button>
    </header>
  );
}
// export default Header;
