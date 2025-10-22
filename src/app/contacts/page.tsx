'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YandexMap from '@/components/YandexMap';
import { MessageCircle } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
          </p>
        </div>

        {/* Контактная информация */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Наши контакты</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/79384052590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:bg-pink-100 rounded-lg p-2 -m-2 transition-colors"
                >
                  <div className="p-3 bg-pink-100 rounded-full">
                    <span className="text-pink-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон / WhatsApp</h3>
                    <p className="text-gray-600">8 (938) 405-25-90</p>
                    <p className="text-sm text-gray-500">Пн-Пт: 10:00-19:00, Сб: 10:00-17:00, Вс: Выходной</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <span className="text-purple-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@daisy-cake.ru</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <span className="text-indigo-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес</h3>
                    <p className="text-gray-600">г. Сочи, ул. Пластунская, д. 151/5</p>
                    <p className="text-sm text-gray-500">Самовывоз доступен</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <span className="text-green-600 text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Время работы</h3>
                    <div className="text-gray-600">
                      <p>Пн-Пт: 10:00 - 19:00</p>
                      <p>Сб: 10:00 - 17:00</p>
                      <p>Вс: Выходной</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Мы в социальных сетях</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a 
                  href="https://wa.me/79384052590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <MessageCircle className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="text-green-700 font-semibold">WhatsApp</span>
                </a>
                <a 
                  href="https://t.me/daisy_cake_sochi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                >
                  <MessageCircle className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-700 font-semibold">Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Как нас найти</h2>
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <YandexMap 
              address="г. Сочи, ул. Пластунская, д. 151/5"
              className="h-96"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}