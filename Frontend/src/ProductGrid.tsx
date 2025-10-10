import { Product } from './shared/types'; 
import ProductCard from './ProductCard';


interface ProductGridProps {
    products: Product[];

}

export default function ProductGrid({products}: ProductGridProps){

  return (
    <div className="product-grid">
      <div className="product-grid-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 