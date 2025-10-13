'use client';

import { X, Star, Clock, Users, Heart, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface CakeDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  cake: {
    id: number;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    description: string;
    image?: string;
    ingredients?: string[];
    allergens?: string[];
    weight?: string;
    shelfLife?: string;
    preparationTime?: string;
    servings?: number;
  };
}

const CakeDetailsModal = ({ isOpen, onClose, cake }: CakeDetailsModalProps) => {
  const { addItem } = useCartStore();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addItem({
      id: `cake-${cake.id}`,
      name: cake.name,
      price: cake.price,
      type: 'cake',
      image: cake.image
    });
    onClose();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="relative">
            {/* Image */}
            <div className="h-64 bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center rounded-t-2xl">
              <span className="text-8xl">🎂</span>
            </div>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Favorite button */}
            <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title and rating */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{cake.name}</h2>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{cake.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({cake.reviews} отзывов)</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-pink-600">{formatPrice(cake.price)}₽</div>
                {cake.weight && (
                  <div className="text-sm text-gray-500">{cake.weight}</div>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{cake.description}</p>

            {/* Details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {cake.servings && (
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-pink-500" />
                  <div>
                    <div className="font-medium text-gray-900">Порций</div>
                    <div className="text-sm text-gray-600">{cake.servings} человек</div>
                  </div>
                </div>
              )}
              
              {cake.preparationTime && (
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-pink-500" />
                  <div>
                    <div className="font-medium text-gray-900">Время приготовления</div>
                    <div className="text-sm text-gray-600">{cake.preparationTime}</div>
                  </div>
                </div>
              )}
              
              {cake.shelfLife && (
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <div>
                    <div className="font-medium text-gray-900">Срок хранения</div>
                    <div className="text-sm text-gray-600">{cake.shelfLife}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Ingredients */}
            {cake.ingredients && cake.ingredients.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Состав</h3>
                <div className="flex flex-wrap gap-2">
                  {cake.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Allergens */}
            {cake.allergens && cake.allergens.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Аллергены</h3>
                <div className="flex flex-wrap gap-2">
                  {cake.allergens.map((allergen, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Добавить в корзину</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeDetailsModal;
