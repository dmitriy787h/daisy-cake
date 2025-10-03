'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShoppingCart, User } from 'lucide-react';

const Header = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">BB</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              {/* TODO: заменить логотип */}
              BB Cake
            </span>
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
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">
                {/* TODO: заменить телефон */}
                +7 (999) 123-45-67
              </span>
            </div>
            
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
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
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+7 (999) 123-45-67</span>
                  </div>
                  
                  <div className="flex space-x-4 mt-2">
                    <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                      <User className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors relative">
                      <ShoppingCart className="w-5 h-5" />
                      <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        0
                      </span>
                    </button>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

