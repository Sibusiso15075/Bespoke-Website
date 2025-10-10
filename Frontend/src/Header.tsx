import { Menu } from 'lucide-react';
import CartIcon from './CartIcon';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-title">
        Bespoke
      </h1>
      
      <div className="header-controls">
        <CartIcon />
        <button 
          onClick={onMenuClick}
          className="menu-button"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 text-black" />
        </button>
      </div>
    </header>
  );
}
