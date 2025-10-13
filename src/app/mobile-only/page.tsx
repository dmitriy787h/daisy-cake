'use client';

import { useState, useEffect } from 'react';
import FullMobileConstructor from '@/components/FullMobileConstructor';

export default function MobileOnlyPage() {
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-500">
          <h2 className="text-xl font-semibold mb-4">Ошибка загрузки</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            Обновить страницу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Отладочная информация */}
      <div className="bg-green-100 border-b border-green-300 p-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-green-800 mb-2">Мобильный конструктор (прямая загрузка)</h2>
          <p className="text-sm text-green-700">
            Ширина экрана: {typeof window !== 'undefined' ? window.innerWidth : 'N/A'}px<br/>
            Компонент: FullMobileConstructor (прямая загрузка)
          </p>
        </div>
      </div>
      
      {/* Мобильный конструктор */}
      <FullMobileConstructor />
    </div>
  );
}
