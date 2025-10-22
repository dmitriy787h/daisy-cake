'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import ProductImageGallery from '@/components/ProductImageGallery';

const HomePage = () => {
  const { addItem } = useCartStore();

  // Данные тортов из каталога
  const cakes = [
    {
      id: 1,
      name: 'С вафельным декором и малиной',
      price: 5200,
      description: '',
      images: ['/images/cakes/mkdir/cake-1.jpg', '/images/cakes/mkdir/cake-1.1.jpg'],
      category: 'cakes'
    },
    {
      id: 2,
      name: 'Бенто Бургер',
      price: 1899,
      description: '',
      images: ['/images/cakes/mkdir/cake-2.jpg'],
      category: 'cakes'
    },
    {
      id: 3,
      name: 'Бенто Лабубу',
      price: 2300,
      description: '',
      images: ['/images/cakes/mkdir/cake-3.1.jpg', '/images/cakes/mkdir/cake-3.jpg'],
      category: 'cakes'
    },
    {
      id: 4,
      name: 'С фирменной рюшей и фигуркой из мастики',
      price: 4600,
      description: '',
      images: ['/images/cakes/mkdir/cake-4.jpg'],
      category: 'cakes'
    },
    {
      id: 5,
      name: 'Муссовый бенто',
      price: 1899,
      description: '',
      images: ['/images/cakes/mkdir/cake-5.1.jpg', '/images/cakes/mkdir/cake-5.2.jpg', '/images/cakes/mkdir/cake-5.3.jpg', '/images/cakes/mkdir/cake-5.jpg'],
      category: 'cakes'
    },
    {
      id: 6,
      name: 'Морской с шоколадным декором',
      price: 4500,
      description: '',
      images: ['/images/cakes/mkdir/cake-6.1.jpg', '/images/cakes/mkdir/cake-6.jpg'],
      category: 'cakes'
    },
    {
      id: 7,
      name: 'С объемными сердечками и шоколадным велюром',
      price: 4700,
      description: '',
      images: ['/images/cakes/mkdir/cake-7.jpg'],
      category: 'cakes'
    },
    {
      id: 8,
      name: 'Бенто с шоколадной фигуркой',
      price: 2150,
      description: '',
      images: ['/images/cakes/mkdir/cake-8.jpg'],
      category: 'cakes'
    },
    {
      id: 9,
      name: 'С рюшами и вишнями',
      price: 4000,
      description: '',
      images: ['/images/cakes/mkdir/cake-9.jpg'],
      category: 'cakes'
    }
  ];

  // Данные десертов из каталога
  const desserts = [
    {
      id: 11,
      name: 'Моти (в ассортименте)',
      price: 250,
      description: 'Японские моти с различными начинками в ассортименте',
      images: ['/images/desserts/desert-1.jpg', '/images/desserts/desert-1.2.jpg', '/images/desserts/desert-1.3.jpg', '/images/desserts/desert-1.4.jpg', '/images/desserts/desert-1.5.jpg', '/images/desserts/desert-1.6.jpg'],
      category: 'desserts'
    },
    {
      id: 12,
      name: 'Французское пирожное макарон с пониженным содержанием сахара (в ассортименте)',
      price: 200,
      description: 'Нежные французские макарон с пониженным содержанием сахара в ассортименте вкусов',
      images: ['/images/desserts/desert-2.jpg', '/images/desserts/desert-2.1.jpg', '/images/desserts/desert-2.2.jpg', '/images/desserts/desert-2.3.jpg', '/images/desserts/desert-2.4.jpg', '/images/desserts/desert-2.5.jpg'],
      category: 'desserts'
    },
    {
      id: 13,
      name: 'Малина в белом и молочном шоколаде',
      price: 750,
      description: 'Свежая малина в белом и молочном шоколаде',
      images: ['/images/desserts/desert-3.jpg', '/images/desserts/desert-3.1.jpg', '/images/desserts/desert-3.2.jpg'],
      category: 'desserts'
    },
    {
      id: 14,
      name: 'Банан в молочном шоколаде',
      price: 700,
      description: 'Свежие бананы в молочном шоколаде',
      images: ['/images/desserts/desert-4.jpg', '/images/desserts/desert-4.1.jpg'],
      category: 'desserts'
    }
  ];

  // Состояние для перемешанных продуктов
  const [popularProducts, setPopularProducts] = useState<typeof cakes[0][]>([]);

  // Перемешиваем продукты только на клиенте
  useEffect(() => {
    const allProducts = [...cakes, ...desserts];
    const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);
    setPopularProducts(shuffledProducts.slice(0, 8));
  }, []);

  const handleAddToCart = (product: typeof popularProducts[0]) => {
    addItem({
      id: `home-${product.id}`,
      name: product.name,
      price: product.price,
      type: product.category === 'cakes' ? 'cake' : 'cake'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Фоновое изображение торта */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/IMG_5670.JPG" 
            alt="Красивый торт" 
            className="w-full h-full object-cover"
          />
          {/* Темный оверлей для читаемости текста */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Градиентный оверлей для красоты */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 to-purple-900/30"></div>
        </div>
        
        {/* Контент поверх фона */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Создайте торт своей мечты
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md">
            Наш онлайн-конструктор позволяет воплотить любую вашу идею в сладкий шедевр.
            Выберите размер, вкусы, декор и получите идеальный торт на заказ.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/builder"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg backdrop-blur-sm"
            >
              Создать торт
            </Link>
            <Link
              href="/catalog"
              className="px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white bg-white/10 hover:bg-white/20 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg backdrop-blur-sm"
            >
              Посмотреть каталог
            </Link>
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600">Мы создаем торты, которые радуют и удивляют</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎂</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Свежие ингредиенты</h3>
              <p className="text-gray-600">Используем только натуральные и свежие продукты для создания наших тортов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем торты в день заказа по всему Сочи</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Уникальный дизайн</h3>
              <p className="text-gray-600">Каждый торт создается по индивидуальному заказу с учетом ваших пожеланий</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cakes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные торты и десерты</h2>
            <p className="text-lg text-gray-600">Наши самые любимые клиентами варианты</p>
          </div>
          
          {/* Горизонтальная прокрутка тортов */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4 justify-center px-4" style={{ width: 'max-content' }}>
                {popularProducts.length > 0 ? popularProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0" style={{ width: '320px' }}>
                    <div className="h-48">
                      <ProductImageGallery
                        images={product.images}
                        alt={product.name}
                        className="h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                      <div className="flex justify-between items-center">
                           <span className="text-xl sm:text-2xl font-bold text-pink-600">{product.price}₽</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-pink-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full hover:bg-pink-600 transition-colors"
                        >
                          В корзину
                        </button>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="flex items-center justify-center w-full h-48">
                    <div className="text-gray-500">Загрузка...</div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Градиентные индикаторы прокрутки */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/catalog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-pink-600 bg-pink-50 hover:bg-pink-100 transition-colors"
            >
              Посмотреть все торты
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Готовы создать свой торт?</h2>
          <p className="text-xl text-pink-100 mb-8">Начните прямо сейчас с нашего конструктора</p>
          <Link
            href="/builder"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-pink-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
          >
            Создать торт
            <span className="ml-2">🎂</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
