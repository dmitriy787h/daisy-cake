'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Clock, Star } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '1000+', label: 'Довольных клиентов' },
    { icon: Award, value: '5', label: 'Лет опыта' },
    { icon: Heart, value: '500+', label: 'Тортов создано' },
    { icon: Star, value: '4.9', label: 'Средний рейтинг' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Качество',
      description: 'Используем только натуральные ингредиенты высшего качества'
    },
    {
      icon: Users,
      title: 'Индивидуальный подход',
      description: 'Каждый торт создается с учетом ваших пожеланий'
    },
    {
      icon: Award,
      title: 'Опыт',
      description: 'Более 5 лет создаем торты для особенных моментов'
    },
    {
      icon: Clock,
      title: 'Своевременность',
      description: 'Всегда доставляем заказы вовремя'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О нашей кондитерской
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {/* TODO: заменить текст */}
              Мы создаем уникальные торты на заказ, превращая ваши мечты в сладкую реальность. 
              Каждый торт - это произведение искусства, созданное с любовью и вниманием к деталям.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {/* TODO: заменить текст */}
                  Все началось с маленькой домашней кухни, где мы экспериментировали с рецептами 
                  и создавали первые торты для друзей и семьи. Страсть к кондитерскому искусству 
                  привела нас к открытию собственной кондитерской.
                </p>
                <p>
                  Сегодня мы гордимся тем, что создаем не просто торты, а незабываемые моменты. 
                  Каждый заказ - это возможность воплотить чью-то мечту в жизнь.
                </p>
                <p>
                  Наша команда состоит из опытных кондитеров, которые постоянно совершенствуют 
                  свои навыки и изучают новые техники декорирования.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl flex items-center justify-center text-8xl">
                🎂
              </div>
              {/* TODO: заменить на реальное фото */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простой процесс заказа от консультации до доставки
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Консультация',
                description: 'Обсуждаем ваши пожелания и помогаем выбрать идеальный торт'
              },
              {
                step: '02',
                title: 'Создание',
                description: 'Наши кондитеры создают торт с учетом всех ваших требований'
              },
              {
                step: '03',
                title: 'Доставка',
                description: 'Доставляем готовый торт в указанное время и место'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Готовы заказать свой идеальный торт?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами или воспользуйтесь нашим конструктором тортов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/constructor"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Создать торт
              </a>
              <a
                href="/contacts"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-pink-600 transition-colors"
              >
                Связаться с нами
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
