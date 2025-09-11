import { Product } from 'react-storefront/api';
import ProductCard from './ProductCard';


interface ProductGridProps{
    products : Product[];
}

export default function ProductGrid({products}:ProductGridProps) {
    return(
        <div className = "px-4 pb-8">
            <div className = "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key = {product.id} product= {product} />
                ))}
            </div>
        </div>
    )
} 