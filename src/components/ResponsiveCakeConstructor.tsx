'use client';

import { useState, useEffect } from 'react';
import SimpleCakeConstructor from './SimpleCakeConstructor';
import FullMobileConstructor from './FullMobileConstructor';

const ResponsiveCakeConstructor = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем размер экрана
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
      }
    };

    checkMobile();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // По умолчанию показываем десктопную версию, если не определили мобильную
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
