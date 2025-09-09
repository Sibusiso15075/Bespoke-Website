import {Search} from 'lucide-react';

interface SearchBarProps{
    searchTerm : string;
    onSearchChange: (value:string)=>void;
}

export default function SearchBar({searchTerm,onSearchChange}:SearchBarProps){
    return(
        <div className='relative px-4 py-4'>
            <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y1/2 w-4 h-4 text-gray-400'/>
                <input 
                type='text' 
                placeholder='Search' 
                value={searchTerm} 
                onChange = {(e)=> onSearchChange(e.target.value)} 
                className='w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent  '
                 />
            </div>
        </div>
    )
}