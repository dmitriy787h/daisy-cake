'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const catalogItems = [
  {
    id: 1,
    name: 'Классический шоколадный торт',
    price: 2500,
    image: '/assets/cakes/chocolate-cake.jpg',
    rating: 4.9,
    reviews: 127,
    description: 'Нежный шоколадный бисквит с кремом и ягодами'
  },
  {
    id: 2,
    name: 'Красный бархат',
    price: 2800,
    image: '/assets/cakes/red-velvet.jpg',
    rating: 4.8,
    reviews: 89,
    description: 'Классический красный бархат с крем-чиз'
  },
  {
    id: 3,
    name: 'Морковный торт',
    price: 2200,
    image: '/assets/cakes/carrot-cake.jpg',
    rating: 4.7,
    reviews: 156,
    description: 'Полезный морковный торт с орехами'
  },
  {
    id: 4,
    name: 'Тирамису',
    price: 3200,
    image: '/assets/cakes/tiramisu.jpg',
    rating: 4.9,
    reviews: 203,
    description: 'Итальянский десерт с кофе и маскарпоне'
  },
  {
    id: 5,
    name: 'Чизкейк Нью-Йорк',
    price: 2600,
    image: '/assets/cakes/cheesecake.jpg',
    rating: 4.8,
    reviews: 94,
    description: 'Классический чизкейк с ягодным соусом'
  },
  {
    id: 6,
    name: 'Торт "Наполеон"',
    price: 2400,
    image: '/assets/cakes/napoleon.jpg',
    rating: 4.6,
    reviews: 178,
    description: 'Слоеный торт с заварным кремом'
  }
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Каталог тортов</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите готовый торт из нашей коллекции или создайте свой уникальный в конструкторе
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button className="px-6 py-2 bg-pink-500 text-white rounded-full font-medium">
            Все торты
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50">
            Шоколадные
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50">
            Фруктовые
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50">
            Без глютена
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50">
            Веганские
          </button>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Изображение */}
              <div className="relative h-64 bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center">
                <span className="text-6xl">🎂</span>
                {/* TODO: заменить на реальное изображение */}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
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
                    <button className="px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors">
                      Подробнее
                    </button>
                    <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center space-x-1">
                      <ShoppingCart className="w-4 h-4" />
                      <span>В корзину</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA секция */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Не нашли подходящий торт?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Создайте свой уникальный торт в нашем конструкторе! 
              Выберите размер, вкус, декор и получите торт своей мечты.
            </p>
            <Link
              href="/constructor"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Создать свой торт
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
