import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft,Plus,Minus} from 'lucide-react'
import { products }  from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity , setQuantity] = useState(1);

  const product= products.find(p => p.id === id)
  return <h1>Product Detail for ID: {id}</h1>;
}

export default ProductDetail;
