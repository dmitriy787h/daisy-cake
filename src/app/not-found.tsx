'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-pink-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Страница не найдена
          </h2>
          <p className="text-gray-600 mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>На главную</span>
          </Link>
          
          <div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Вернуться назад</span>
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Если проблема повторяется, свяжитесь с нами:</p>
          <a 
            href="https://wa.me/79384052590" 
            className="text-pink-500 hover:text-pink-600"
          >
            WhatsApp: +7 (938) 405-25-90
          </a>
        </div>
      </div>
    </div>
  );
}
