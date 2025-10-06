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

          <h1 className="text-lg font-bold text-black">Cart</h1>

          <CartIcon />
        </header>

        {/* Empty Cart State */}
        <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-xl font-bold text-black mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6 max-w-sm">
            Looks like you haven't added any items to your cart yet. Start
            shopping to fill it up!
          </p>
          <Link
            to="/"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
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

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Cart Items */}
        <div className="bg-white rounded-lg mb-6">
          <div className="divide-y divide-gray-100">
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
        {/*
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-black mb-4">Order Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal ({itemCount} items)</span>
              <span className="text-black font-medium">R{total.toFixed(0)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="text-black font-medium">
                {shipping === 0 ? 'Free' : `R${shipping}`}
              </span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="text-black font-medium">R{tax}</span>
            </div>
            
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-black">Total</span>
                <span className="text-lg font-bold text-black">R{finalTotal.toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
*/}
        {/* Checkout Button */}
        <button className="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors mb-4">
          Proceed to Checkout
        </button>

        {/* Continue Shopping */}
        <Link
          to="/"
          className="block text-center text-gray-600 hover:text-black transition-colors text-sm"
        >
          Continue Shopping
        </Link>

        {/* Shipping Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-black mb-2">Free Shipping</h4>
          <p className="text-sm text-gray-600">
            Free standard shipping on all orders over R500. Express shipping
            available at checkout.
          </p>
        </div>

        {/* Return Policy */}
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <h4 className="font-medium text-black mb-2">Easy Returns</h4>
          <p className="text-sm text-gray-600">
            30-day return policy. Items must be in original condition with tags
            attached.
          </p>
        </div>
      </div>
    </div>
  );
}
