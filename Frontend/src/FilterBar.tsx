import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const filterOptions = [
  { label: 'New', value: 'new' },
  { label: 'Price ascending', value: 'price_asc' },
  { label: 'Price descending', value: 'price_desc' },
  { label: 'Rating', value: 'rating' },
];

export default function FilterBar({ selectedFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-options">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onFilterChange(option.value)}
            className={`filter-button ${selectedFilter === option.value ? 'active' : ''}`}
          >
            {option.label}
            <ChevronDown className="w-3 h-3" />
          </button>
        ))}
      </div>
    </div>
  );
}
