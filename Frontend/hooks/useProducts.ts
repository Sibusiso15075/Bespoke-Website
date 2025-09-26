import { useState,useMemo } from "react";

import{ products as allProducts } from './data/products'


export function useProducts(){
    const[searchTerm ,setSearchTerm ] = useState('');
    const [selecetedFilter, setSelectedFilter] = useState('new');

    const filtererdProducts = useMemo(()=>{
        let filtered = allProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    })

    // Apply sorting based on selected filter
}