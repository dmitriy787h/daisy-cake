'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useState, useEffect } from 'react';
import CakeDetailsModal from '@/components/CakeDetailsModal';
import ProductImageGallery from '@/components/ProductImageGallery';

const cakeItems = [
  {
    id: 1,
    name: 'С малиной',
    price: 5200,
    rating: 4.9,
    reviews: 127,
    description: 'Нежный бисквит с малиновым кремом и свежими ягодами',
    weight: '1.5 кг',
    servings: 8,
    preparationTime: '4-6 часов',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Сливочное масло', 'Сливки', 'Малина', 'Ваниль', 'Лимон'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-1.jpg',
      '/images/cakes/mkdir/cake-1.1.jpg'
    ]
  },
  {
    id: 2,
    name: 'Бенто бургер',
    price: 1899,
    rating: 4.8,
    reviews: 89,
    description: 'Мини-торт в виде бургера с шоколадным бисквитом и кремом',
    weight: '0.4 кг',
    servings: 2,
    preparationTime: '3-4 часа',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Мука', 'Какао', 'Сахар', 'Яйца', 'Сливочное масло', 'Сливки', 'Шоколад', 'Ваниль'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-2.jpg'
    ]
  },
  {
    id: 3,
    name: 'Лабубу бенто',
    price: 2300,
    rating: 4.7,
    reviews: 156,
    description: 'Мини-торт с нежным бисквитом и воздушным кремом',
    weight: '0.65 кг',
    servings: 2,
    preparationTime: '2-3 часа',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Сливочное масло', 'Сливки', 'Ваниль', 'Лимон', 'Крахмал'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-3.1.jpg',
      '/images/cakes/mkdir/cake-3.jpg'
    ]
  },
  {
    id: 4,
    name: 'С лисой',
    price: 4600,
    rating: 4.9,
    reviews: 203,
    description: 'Нежный торт с декором в виде лисы и ягодным кремом',
    weight: '1.5 кг',
    servings: 8,
    preparationTime: '5-6 часов',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Сливочное масло', 'Сливки', 'Ягоды', 'Ваниль', 'Пищевые красители'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-4.jpg'
    ]
  },
  {
    id: 5,
    name: 'Мусс бенто',
    price: 1799,
    rating: 4.8,
    reviews: 94,
    description: 'Мини-торт с воздушным муссом и нежным бисквитом',
    weight: '0.4 кг',
    servings: 2,
    preparationTime: '3-4 часа',
    shelfLife: '2 дня в холодильнике',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Сливки', 'Желатин', 'Ваниль', 'Шоколад', 'Крахмал'],
    allergens: ['Яйца', 'Молочные продукты', 'Глютен'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-5.1.jpg',
      '/images/cakes/mkdir/cake-5.2.jpg',
      '/images/cakes/mkdir/cake-5.3.jpg',
      '/images/cakes/mkdir/cake-5.jpg'
    ]
  },
  {
    id: 6,
    name: 'Морской',
    price: 4500,
    rating: 4.6,
    reviews: 178,
    description: 'Торт с морской тематикой и голубым кремом',
    weight: '1.5 кг',
    servings: 8,
    preparationTime: '5-6 часов',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Сливочное масло', 'Сливки', 'Ваниль', 'Пищевые красители', 'Кокос'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-6.1.jpg',
      '/images/cakes/mkdir/cake-6.jpg'
    ]
  },
  {
    id: 7,
    name: 'Красный с сердцами',
    price: 4700,
    rating: 4.7,
    reviews: 145,
    description: 'Романтичный красный торт с декором в виде сердец',
    weight: '1.5 кг',
    servings: 8,
    preparationTime: '5-6 часов',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Сливочное масло', 'Сливки', 'Красный краситель', 'Ваниль', 'Шоколад'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-7.jpg'
    ]
  },
  {
    id: 8,
    name: 'Бенто с медведем',
    price: 2100,
    rating: 4.8,
    reviews: 112,
    description: 'Мини-торт с декором в виде медведя и нежным кремом',
    weight: '0.4 кг',
    servings: 2,
    preparationTime: '3-4 часа',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Сливочное масло', 'Сливки', 'Шоколад', 'Ваниль', 'Пищевые красители'],
    allergens: ['Яйца', 'Молочные продукты', 'Глютен'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-8.jpg'
    ]
  },
  {
    id: 9,
    name: 'С рюшами и вишнями',
    price: 4000,
    rating: 4.9,
    reviews: 167,
    description: 'Элегантный торт с рюшами из крема и вишневой начинкой',
    weight: '1.5 кг',
    servings: 8,
    preparationTime: '6-7 часов',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Мука', 'Сахар', 'Яйца', 'Сливочное масло', 'Сливки', 'Вишня', 'Ваниль', 'Лимон'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    category: 'cakes',
    images: [
      '/images/cakes/mkdir/cake-9.jpg'
    ]
  }
];

const dessertItems = [
  {
    id: 11,
    name: 'Моти (в ассортименте)',
    price: 250,
    rating: 4.8,
    reviews: 89,
    description: 'Японские моти с различными начинками в ассортименте',
    weight: '70г',
    servings: 1,
    preparationTime: '2-3 часа',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Рисовая мука', 'Сахар', 'Вода', 'Начинка', 'Крахмал'],
    allergens: [],
    category: 'desserts',
    images: [
      '/images/desserts/desert-1.jpg',
      '/images/desserts/desert-1.2.jpg',
      '/images/desserts/desert-1.3.jpg',
      '/images/desserts/desert-1.4.jpg',
      '/images/desserts/desert-1.5.jpg',
      '/images/desserts/desert-1.6.jpg'
    ]
  },
  {
    id: 12,
    name: 'Французское пирожное макарон с пониженным содержанием сахара (в ассортименте)',
    price: 200,
    rating: 4.9,
    reviews: 156,
    description: 'Нежные французские макарон с пониженным содержанием сахара в ассортименте вкусов',
    weight: '45-50г',
    servings: 1,
    preparationTime: '3-4 часа',
    shelfLife: '5 дней в холодильнике',
    ingredients: ['Миндальная мука', 'Сахар (пониженное содержание)', 'Яичные белки', 'Пищевые красители', 'Начинка'],
    allergens: ['Орехи', 'Яйца'],
    category: 'desserts',
    images: [
      '/images/desserts/desert-2.jpg',
      '/images/desserts/desert-2.1.jpg',
      '/images/desserts/desert-2.2.jpg',
      '/images/desserts/desert-2.3.jpg',
      '/images/desserts/desert-2.4.jpg',
      '/images/desserts/desert-2.5.jpg'
    ]
  },
  {
    id: 13,
    name: 'Малина в белом и молочном шоколаде',
    price: 750,
    rating: 4.7,
    reviews: 134,
    description: 'Свежая малина в белом и молочном шоколаде',
    weight: '150г',
    servings: 1,
    preparationTime: '2-3 часа',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Малина', 'Белый шоколад', 'Молочный шоколад', 'Сахар', 'Масло какао'],
    allergens: ['Молочные продукты'],
    category: 'desserts',
    images: [
      '/images/desserts/desert-3.jpg',
      '/images/desserts/desert-3.1.jpg',
      '/images/desserts/desert-3.2.jpg'
    ]
  },
  {
    id: 14,
    name: 'Банан в молочном шоколаде',
    price: 700,
    rating: 4.6,
    reviews: 98,
    description: 'Свежие бананы в молочном шоколаде',
    weight: '150г',
    servings: 1,
    preparationTime: '2-3 часа',
    shelfLife: '3 дня в холодильнике',
    ingredients: ['Бананы', 'Молочный шоколад', 'Сахар', 'Масло какао'],
    allergens: ['Молочные продукты'],
    category: 'desserts',
    images: [
      '/images/desserts/desert-4.jpg',
      '/images/desserts/desert-4.1.jpg'
    ]
  }
];

export default function CatalogPage() {
  const { addItem } = useCartStore();
  const [selectedCake, setSelectedCake] = useState<typeof cakeItems[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [addedToCart, setAddedToCart] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'cakes' | 'desserts'>('cakes');

  // Загружаем лайки из localStorage при загрузке компонента
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedLikes = localStorage.getItem('catalog-likes');
      if (savedLikes && savedLikes.trim() !== '') {
        const parsedLikes = JSON.parse(savedLikes);
        if (Array.isArray(parsedLikes)) {
          setLikedItems(new Set(parsedLikes));
        }
      }
    } catch (error) {
      // Error parsing saved likes
      // Очищаем невалидные данные
      localStorage.removeItem('catalog-likes');
    }
  }, []);

  // Сохраняем лайки в localStorage при изменении
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem('catalog-likes', JSON.stringify(Array.from(likedItems)));
    } catch (error) {
      // Error saving likes
    }
  }, [likedItems]);

  const handleAddToCart = (item: typeof cakeItems[0] | typeof dessertItems[0]) => {
    const itemId = `${item.category}-${item.id}`;
    
    addItem({
      id: itemId,
      name: item.name,
      price: item.price,
      type: 'cake',
      image: undefined
    });
    
    // Добавляем визуальную обратную связь
    setAddedToCart(prev => new Set([...prev, itemId]));
    
    // Убираем индикатор через 2 секунды
    setTimeout(() => {
      setAddedToCart(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }, 2000);
  };

  const handleShowDetails = (item: typeof cakeItems[0] | typeof dessertItems[0]) => {
    setSelectedCake(item as typeof cakeItems[0]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCake(null);
  };

  const handleToggleLike = (itemId: number) => {
    setLikedItems(prev => {
      const newLikedItems = new Set(prev);
      if (newLikedItems.has(itemId)) {
        newLikedItems.delete(itemId);
      } else {
        newLikedItems.add(itemId);
      }
      return newLikedItems;
    });
  };

  // Получаем текущие товары в зависимости от активной вкладки
  const currentItems = activeTab === 'cakes' ? cakeItems : dessertItems;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Каталог</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите готовый торт или десерт из нашей коллекции или создайте свой уникальный в конструкторе
            </p>
          </div>

          {/* Вкладки */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('cakes')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === 'cakes'
                    ? 'bg-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Торты
              </button>
              <button
                onClick={() => setActiveTab('desserts')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === 'desserts'
                    ? 'bg-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Десерты
              </button>
            </div>
          </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Изображение */}
              <div className="relative">
                <ProductImageGallery
                  images={item.images || []}
                  alt={item.name}
                  className="h-64"
                />
                <button 
                  onClick={() => handleToggleLike(item.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110 ${
                    likedItems.has(item.id) 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      likedItems.has(item.id) ? 'fill-current' : ''
                    }`} 
                  />
                </button>
              </div>

              {/* Контент */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                    <span className="text-sm text-gray-400">({item.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-pink-600">{item.price}₽</div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleShowDetails(item)}
                      className="px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 transition-colors"
                    >
                      Подробнее
                    </button>
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className={`px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm rounded-full transition-all duration-300 flex items-center space-x-1 transform ${
                        addedToCart.has(`${item.category}-${item.id}`)
                          ? 'bg-green-500 text-white scale-105 animate-pulse'
                          : 'bg-pink-500 text-white hover:bg-pink-600 hover:scale-105'
                      }`}
                    >
                      {addedToCart.has(`${item.category}-${item.id}`) ? (
                        <>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="hidden sm:inline">Добавлено!</span>
                          <span className="sm:hidden">✓</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3 h-3" />
                          <span className="hidden sm:inline">В корзину</span>
                          <span className="sm:hidden">В корзину</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA секция */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Не нашли подходящий {activeTab === 'cakes' ? 'торт' : 'десерт'}?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {activeTab === 'cakes' 
                ? 'Создайте свой уникальный торт в нашем конструкторе! Выберите размер, вкус, декор и получите торт своей мечты.'
                : 'Свяжитесь с нами для заказа индивидуального десерта! Мы создадим уникальный десерт специально для вас.'
              }
            </p>
            <Link
              href={activeTab === 'cakes' ? '/builder' : '/contacts'}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {activeTab === 'cakes' ? 'Создать свой торт' : 'Заказать десерт'}
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCake && (
        <CakeDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          cake={selectedCake}
        />
      )}

      <Footer />
    </div>
  );
}