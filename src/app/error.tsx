'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логируем ошибку в консоль для отладки
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Что-то пошло не так
          </h1>
          <p className="text-gray-600 mb-8">
            Произошла непредвиденная ошибка. Мы уже работаем над её исправлением.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-colors w-full"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Попробовать снова</span>
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-colors w-full"
          >
            <Home className="w-5 h-5" />
            <span>На главную</span>
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Если ошибка повторяется, свяжитесь с нами:</p>
          <a 
            href="https://wa.me/79384052590" 
            className="text-pink-500 hover:text-pink-600"
          >
            WhatsApp: +7 (938) 405-25-90
          </a>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Техническая информация
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
              {error.message}
              {error.digest && `\nDigest: ${error.digest}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
