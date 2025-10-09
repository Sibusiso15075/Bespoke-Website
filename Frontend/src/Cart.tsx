import { Link } from "react-router";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext.tsx";
import CartItem from "./CartItem";
import CartIcon from "./CartIcon";

export default function Cart() {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } =
    useCart();

  //   const shipping = total > 0 ? 50 : 0; // Free shipping over certain amount could be implemented
  //   const tax = Math.round(total * 0.15); // 15% tax
  //   const finalTotal = total + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="page-container">
        {/* Header */}
        <header className="page-header">
          <Link to="/" className="back-link">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          
          <h1 className="page-title">Cart</h1>
          
          <CartIcon />
        </header>

        {/* Empty Cart State */}
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <ShoppingBag className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="empty-cart-title">Your cart is empty</h2>
          <p className="empty-cart-text">
            Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
          </p>
          <Link
            to="/"
            className=" empty-cart-button"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <Link
          to="/"
          className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </Link>

        <h1 className="text-lg font-bold text-black">Cart ({itemCount})</h1>

        <button
          onClick={clearCart}
          className="text-sm text-gray-600 hover:text-black transition-colors"
        >
          Clear
        </button>
      </header>

      <div className="cart-container ">
        {/* Cart Items */}
        <div className="cart-items-section ">
          <div className="cart-items-divider">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3 className="order-summary-title">Order Summary</h3>
          
          <div className="space-y-3">
            <div className="summary-row">
              <span className="summary-label">Subtotal ({itemCount} items)</span>
              <span className="summary-value">R{total.toFixed(0)}</span>
            </div>
            
            <div className="summary-row">
              <span className="summary-label">Shipping</span>
              <span className="summary-value">
                {shipping === 0 ? 'Free' : `R${shipping}`}
              </span>
            </div>
            
            <div className="summary-row">
              <span className="summary-label">Tax</span>
              <span className="summary-value">R{tax}</span>
            </div>
            
            <div className="summary-total">
              <div className="summary-total-row">
                <span className="summary-total-label">Total</span>
                <span className="summary-total-value">R{finalTotal.toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
*/}
        {/* Checkout Button */}
        <button className="checkout-button">
          Proceed to Checkout
        </button>

        {/* Continue Shopping */}
        <Link
          to="/"
          className=" continue-shopping"
        >
          Continue Shopping
        </Link>

        {/* Shipping Info */}
        <div className="info-box shipping">
          <h4 className="info-box-title">Free Shipping</h4>
          <p className="info-box-text">
            Free standard shipping on all orders over R500. Express shipping available at checkout.
          </p>
        </div>

        {/* Return Policy */}
        <div className="info-box returns">
          <h4 className="info-box-title">Easy Returns</h4>
          <p className="info-box-text">
            30-day return policy. Items must be in original condition with tags attached.
          </p>
        </div>
      </div>
    </div>
  );
}
