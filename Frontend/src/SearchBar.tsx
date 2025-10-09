import { Search } from "lucide-react";
import React, { useState } from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="search-container">
      <div className="search-innput-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input  "
        />
      </div>
    </div>
  );
}
