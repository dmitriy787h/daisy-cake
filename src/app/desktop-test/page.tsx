'use client';

import { useState, useEffect } from 'react';
import SimpleCakeConstructor from '@/components/SimpleCakeConstructor';

export default function DesktopTestPage() {
  const [isClient, setIsClient] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      setScreenWidth(window.innerWidth);
      
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Отладочная информация */}
      <div className="bg-blue-100 border-b border-blue-300 p-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Отладочная информация</h2>
          <p className="text-sm text-blue-700">
            Ширина экрана: {screenWidth}px<br/>
            Десктопная версия: {screenWidth >= 768 ? 'Да' : 'Нет'}<br/>
            Компонент: SimpleCakeConstructor
          </p>
        </div>
      </div>
      
      {/* Десктопный конструктор */}
      <SimpleCakeConstructor />
    </div>
  );
}
