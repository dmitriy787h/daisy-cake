'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Конструктор', href: '/constructor' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-pink-600">Daisy Cake</span>
          </Link>

          {/* Правые иконки */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            
            {/* Мобильное меню */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-pink-600 hover:bg-pink-50 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-base font-medium text-gray-800">8 (938) 405-25-90</span>
            </div>
            <div className="space-y-1">
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50">
                Корзина
              </button>
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50">
                Войти
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
