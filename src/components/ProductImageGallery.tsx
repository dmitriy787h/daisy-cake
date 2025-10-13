'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

const ProductImageGallery = ({ images, alt, className = '' }: ProductImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (images.length === 0 || imageError) {
    // Fallback для товаров без фото или с ошибкой загрузки
    return (
      <div className={`relative h-64 bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center ${className}`}>
        <span className="text-6xl">🎂</span>
      </div>
    );
  }

  return (
    <div className={`relative h-64 bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {/* Основное изображение */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentImageIndex]}
          alt={`${alt} - фото ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={currentImageIndex === 0}
          onError={() => setImageError(true)}
        />
        
        {/* Навигационные стрелки */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Индикатор количества фото */}
        {images.length > 1 && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Миниатюры */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
