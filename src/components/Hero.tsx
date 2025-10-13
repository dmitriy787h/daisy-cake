'use client';

import Link from 'next/link';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - текст */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Создайте свой
              <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                идеальный торт
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Уникальные торты на заказ с использованием только натуральных ингредиентов. 
              Выберите размер, вкус, декор и создайте торт своей мечты!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/constructor"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Создать торт
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-500 text-pink-500 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Посмотреть каталог
              </Link>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold text-gray-900 ml-1">4.9</span>
                </div>
                <p className="text-sm text-gray-600">Рейтинг клиентов</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-pink-500" />
                  <span className="text-2xl font-bold text-gray-900 ml-1">1000+</span>
                </div>
                <p className="text-sm text-gray-600">Довольных клиентов</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span className="text-2xl font-bold text-gray-900 ml-1">5</span>
                </div>
                <p className="text-sm text-gray-600">Лет опыта</p>
              </div>
            </div>
          </div>

          {/* Правая часть - изображение */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl flex items-center justify-center text-6xl">
              🎂
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;