'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Phone, Wrench } from 'lucide-react';

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка и оплата</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Удобные способы доставки и оплаты для вашего комфорта
          </p>
        </div>

        {/* Основной контент */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Доставка */}
            <section className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">🚚</span>
                Доставка
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">По городу Сочи</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Доставка в день заказа</span>
                      <span className="font-semibold text-pink-600">500₽</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Доставка на следующий день</span>
                      <span className="font-semibold text-pink-600">300₽</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">При заказе от 5000₽</span>
                      <span className="font-semibold text-green-600">Бесплатно</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Время доставки</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">Понедельник - Воскресенье: 9:00 - 21:00</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">Минимальное время заказа: 3 часа</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">Доставка в день заказа до 18:00</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Зоны доставки</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Центральные районы</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Центр города</li>
                        <li>• Адлер</li>
                        <li>• Хоста</li>
                        <li>• Мацеста</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Отдаленные районы</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Лазаревское</li>
                        <li>• Дагомыс</li>
                        <li>• Красная Поляна</li>
                        <li>• Уточняйте по телефону</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Оплата */}
            <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">💳</span>
                Способы оплаты
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Наличными</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">При получении заказа</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Курьеру или в магазине</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Подготовьте точную сумму</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Банковской картой</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Visa, MasterCard, МИР</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">При получении заказа</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Безопасная оплата</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Переводом на карту</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Сбербанк, Тинькофф, ВТБ</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Реквизиты высылаем после заказа</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Скидка 5% при предоплате</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Условия */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-4">📋</span>
                Условия заказа
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Минимальный заказ</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Минимальная сумма заказа: 1000₽</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Исключение: доставка в день заказа</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Отмена заказа</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Отмена возможна за 2 часа до доставки</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Возврат средств в течение 24 часов</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Качество продукции</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Все торты изготавливаются в день заказа</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Используем только свежие продукты</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Гарантия качества 100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Контакты для заказа */}
            <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Готовы заказать?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Свяжитесь с нами любым удобным способом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/79384052590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="tel:+79384052590" 
                  className="flex items-center justify-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Позвонить</span>
                </a>
                <a 
                  href="/constructor" 
                  className="flex items-center justify-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-colors group"
                >
                  <Wrench className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Конструктор</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
