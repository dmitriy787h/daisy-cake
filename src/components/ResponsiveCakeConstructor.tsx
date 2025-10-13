'use client';

import { useState, useEffect } from 'react';
import SimpleCakeConstructor from './SimpleCakeConstructor';
import FullMobileConstructor from './FullMobileConstructor';

const ResponsiveCakeConstructor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setIsClient(true);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Показываем загрузку до определения размера экрана
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка конструктора...</p>
        </div>
      </div>
    );
  }


  if (isMobile) {
    try {
      return <FullMobileConstructor />;
    } catch (error) {
      console.error('Error rendering mobile constructor:', error);
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center text-red-500">
            <h2 className="text-xl font-semibold mb-4">Ошибка загрузки мобильного конструктора</h2>
            <p>Попробуйте обновить страницу</p>
            <p className="text-sm mt-2">Ошибка: {error instanceof Error ? error.message : String(error)}</p>
          </div>
        </div>
      );
    }
  }

  return <SimpleCakeConstructor />;
};

export default ResponsiveCakeConstructor;
