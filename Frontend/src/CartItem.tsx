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
    <div className="flex gap-4 py-6 border-b border-gray-100">
      {/* Product Image */}
      <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-sm font-medium text-black truncate">
              {item.product.name}
            </h3>
            <p className="text-sm text-gray-500">Size: {item.size}</p>
          </div>

          <button
            onClick={() => onRemove(item.id)}
            className="p-1 hover:bg-gray-50 rounded transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-sm font-medium w-8 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-sm font-semibold text-black">
              R{(item.product.price * item.quantity).toFixed(0)}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-gray-500">
                R{item.product.price} each
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
