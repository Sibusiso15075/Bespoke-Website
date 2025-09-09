import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
      <h1 className="text-2xl font-bold text-black tracking-tight">
        Bespoke
      </h1>
      
      <button 
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-black" />
      </button>
    </header>
  );
}
