'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useCartHydration } from '@/hooks/useCartHydration';
import Cart from './Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const isMounted = useIsMounted();
  useCartHydration();

  const menuItems = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Конструктор', href: '/constructor' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <img 
                src="/images/logo/logo.png" 
                alt="Daisy Cake - Конструктор тортов на заказ" 
                className="h-12 w-auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = 'none';
                  const next = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = 'flex';
                }}
              />
              <div 
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center"
                style={{ display: 'none' }}
              >
                <span className="text-white font-bold text-xl">D</span>
              </div>
            </div>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Контакты и корзина */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/79384052590" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">8 (938) 405-25-90</span>
            </a>
            
            <button 
              onClick={toggleCart}
              className="p-2 text-gray-600 hover:text-pink-600 transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {isMounted && getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-4 py-2 border-t border-gray-200 mt-4">
                <a 
                  href="https://wa.me/79384052590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors mb-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">8 (938) 405-25-90</span>
                </a>
                
                <div className="flex space-x-4 mt-2">
                  <button 
                    onClick={toggleCart}
                    className="p-2 text-gray-600 hover:text-pink-600 transition-colors relative"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {isMounted && getTotalItems() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {getTotalItems()}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Cart Component */}
      <Cart />
    </header>
  );
};

export default Header;