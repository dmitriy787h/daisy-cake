'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Наши контакты</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-pink-100 rounded-full">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">
                      {/* TODO: заменить телефон */}
                      +7 (999) 123-45-67
                    </p>
                    <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      {/* TODO: заменить email */}
                      info@bb-cake.ru
                    </p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес</h3>
                    <p className="text-gray-600">
                      {/* TODO: заменить адрес */}
                      г. Москва, ул. Примерная, д. 123
                    </p>
                    <p className="text-sm text-gray-500">Самовывоз доступен</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Время работы</h3>
                    <div className="text-gray-600">
                      <p>Пн-Пт: 9:00 - 21:00</p>
                      <p>Сб-Вс: 10:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
                  <span className="text-pink-600 font-semibold">Instagram</span>
                </a>
                <a href="#" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 font-semibold">Facebook</span>
                </a>
                <a href="#" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                  <span className="text-white font-semibold">VK</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Написать нам</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Тема сообщения
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Выберите тему</option>
                  <option value="order">Заказ торта</option>
                  <option value="question">Вопрос по меню</option>
                  <option value="delivery">Доставка</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Расскажите подробнее о вашем запросе..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Отправить сообщение
              </button>
            </form>
          </motion.div>
        </div>

        {/* Карта */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Как нас найти</h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                {/* TODO: добавить реальную карту */}
                Здесь будет интерактивная карта
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
