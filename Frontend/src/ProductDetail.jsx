import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft,Plus,Minus} from 'lucide-react'
import { products }  from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity , setQuantity] = useState(1);

  const product= products.find(p => p.id === id)

 if (!product) {
    return (
      <div className="not-found">
        <div className="not-found-content">
          <h1 className="not-found-title">Product Not Found</h1>
          <Link to="/" className="not-found-link">
            Return to Home
          </Link>
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

 return (
    <div className="page-container">
      {/* Header */}
      <header className="product-detail-header">
        <Link to="/" className="back-link">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        
        <nav className="product-nav">
          <a href="#">Products</a>
          <a href="#">Shipping</a>
          <a href="#">T-Shirts</a>
          <a href="#">Bundles</a>
          <a href="#">Pricing</a>
          <a href="#">Accessories</a>
        </nav>


        <div className="product-header-controls">
          <CartIcon />
          <button className="auth-button signup">
            Sign Up
          </button>
          <button className="auth-button follow">
            Follow
          </button>
        </div>
      </header>

     {/* Product Detail */}
      <div className="product-detail-content">
        <div className="product-detail-grid">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail images */}
            <div className="thumbnails">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="thumbnail">
                  <img
                    src={product.image}
                    alt={`${product.name} view ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-title-section">
              <h1 className="product-detail-title">{product.name}</h1>
              <div className="product-price-section">
                <span className="product-detail-price">R{product.price}</span>
                <span className="tax-label">Tax</span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="form-section">
              <label className="form-label">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="size-select"
              >
                <option value="">Select size</option>
                {sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Quantity Selection */}
            <div className="form-section">
              <label className="form-label">Quantity</label>
              <div className="quantity-section">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="quantity-button-large"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="quantity-display-large">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="quantity-button-large"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>

            {/* Product Description */}
            <div className="product-description">
              <h3 className="description-title">Description</h3>
              <div className="description-list">
                <p>• 100% BLACK COTTON</p>
                <p>• PREMIUM T-SHIRT</p>
                <p>• GARMENT WASHED FOR SOFT FEEL AND EMBROIDERY</p>
                <p>• SILICON SOFTENER LASTING</p>
                <p>• FORM FLATTERING BOTTOM HEM</p>
                <p>• OVERSIZED RELAXED FIT WITH ROLLED SLEEVES SHAPE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <h3 className="newsletter-title">Follow the latest trends</h3>
          <p className="newsletter-subtitle">With our daily newsletter</p>
          
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="yourname@site.com"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  // return <h1>Product Detail for ID: {id}</h1>;
}

export default ProductDetail;
