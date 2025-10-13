'use client';

interface YandexMapProps {
  address: string;
  className?: string;
}

const YandexMap = ({ address, className = '' }: YandexMapProps) => {
  // Кодируем адрес для URL
  const encodedAddress = encodeURIComponent(address);
  
  // Создаем URL для Яндекс карт
  const yandexMapUrl = `https://yandex.ru/maps/?text=${encodedAddress}&mode=search`;

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${className}`}>
      {/* Простая кнопка */}
      <a
        href={yandexMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium mb-4"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Открыть в Яндекс.Картах
      </a>
      
      {/* Адрес под кнопкой */}
      <div className="text-gray-600 text-center">
        {address}
      </div>
    </div>
  );
};

export default YandexMap;
