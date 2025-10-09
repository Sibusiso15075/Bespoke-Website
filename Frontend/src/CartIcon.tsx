import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from './contexts/CartContext';

export default function CartIcon() {
  const { itemCount } = useCart();

  return (
    <Link 
      to="/cart" 
      className="cart-icon"
      aria-label="Shopping Cart"
    >
      <ShoppingBag className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="cart-badge">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
