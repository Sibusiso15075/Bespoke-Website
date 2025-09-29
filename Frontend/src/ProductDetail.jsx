import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft,Plus,Minus} from 'lucide-react'
import { products }  from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity , setQuantity] = useState(1);

  const product= products.find(p => p.id === id)

  if(!product){
    return(
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2x1 font-bold text-gray-900 mb-4">Product Not Found</h1>
          <link to="" className="text-blue-600 hover:text-blue-800">
           Return to Home
          </link> 
        </div> 
      </div>
    );
  }

  const sizes = ['S','M','L','XL'];

  const handleQuantityChange = (change)=>{
    setQuantity(Math.max(1,quantity + change));
  };

  const handleAddToCart = ()=>{
    if(!selectedSize){
      alert("Please select a size");
      return;
    }
    //TODO: Add to cart functionality
    alert(`Added ${quantity} of size ${selectedSize} to cart`);
  };

  return(
    <div className="min-h-screen bg-white">
      {/*Header */}
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-180">
        <Link className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
        
        <ArrowLeft className= "w-5 h-5"/>
        </Link>


        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-gray-600 transition-colors">Products</a>
          <a href="#" className="hover:text-gray-600 transition-colors">T-Shirts</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Accessories</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Shipping</a>
        </nav>

        <div className="flex items-center gap-4">
        <button className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
          Sign Up
        </button>
        <button className="text-sm px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
          Follow 
        </button>
        </div>
      </header>


      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-500 rounded-lg overflow-hidden">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return <h1>Product Detail for ID: {id}</h1>;
}

export default ProductDetail;
