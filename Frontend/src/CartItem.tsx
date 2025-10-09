import { Plus, Minus, X } from "lucide-react";
import { CartItem as CartItemType } from "../contexts/CartContext.tsx";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const handleQuantityChange = (change: number) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      {/* Product Image */}
      <div className="cart-item-image">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="cart-item-details">
        <div className="cart-item-header">
          <div className="cart-item-info">
            <h3 className="cart-item-name">
              {item.product.name}
            </h3>
            <p className="cart-item-size">Size: {item.size}</p>
          </div>

          <button
            onClick={() => onRemove(item.id)}
            className="cart-item-remove"
            aria-label="Remove item"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <div className="cart-item-controls">
          {/* Quantity Controls */}
          <div className="quantity-controls">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="quantity-button"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="quantity-display">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="quantity-button"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Price */}
          <div className="cart-item-price">
            <p className="price-total">
              R{(item.product.price * item.quantity).toFixed(0)}
            </p>
            {item.quantity > 1 && (
              <p className="price-each">
                R{item.product.price} each
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
