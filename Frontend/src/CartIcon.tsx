import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../contexts/CartContext.tsx";

export default function CartIcon() {
  const { itemCount } = useCart();

  return (
    <Link
      to="/cart"
      className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors"
      aria-label="Shopping Cart"
    >
      <ShoppingBag className="w-6 h-6 text-black" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
