import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
    selectedFilter: string ;
    onFilterChange: (filter: string) => void;
}

const filterOptions = [
    { label: 'New', value: 'new'},
    { label: 'Price Ascending', value: 'price_asc'},
    { label: 'Price descending', value: 'price_desc'},
    { label: 'Rating', value: 'rating'}
];

export default function FilterBar({selectedFilter,onFilterChange}:FilterBarProps){
    return (
        <div className='px-4 pb-4'>
            <div className='flex gap overflow-x-auto'>
                {filterOptions.map((option)=>(
                    <button 
                    key={option.value} 
                    onClick={()=>onFilterChange(option.value)} 
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-sm whitespace-nowrap transition-colors ${
                        selectedFilter===option.value 
                        ?'bg=black text-white border-black' 
                        :'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}>
                            {option.label}
                            <ChevronDown class name="w-3 h-3"/>
                        </button>
                    ))}
            </div>
        </div>
    );
}