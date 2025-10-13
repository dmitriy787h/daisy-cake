'use client';

import { useCartStore } from '@/store/cartStore';
import { X, Plus, Minus, ShoppingCart, Gift, Package, Cake } from "lucide-react";
import Link from 'next/link';
import { useIsMounted } from '@/hooks/useIsMounted';

const Cart = () => {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    updateQuantity, 
    removeItem, 
    getTotalPrice, 
    getTotalItems 
  } = useCartStore();
  const isMounted = useIsMounted();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const getReminders = () => {
    const reminders = [];
    
    // Проверяем, есть ли торты без свечей
    const cakesWithoutCandles = items.filter(item => 
      item.type === 'custom' && 
      (!item.configuration?.candles || item.configuration.candles === 0)
    );
    
    if (cakesWithoutCandles.length > 0) {
      reminders.push({
        icon: <Cake className="w-4 h-4" />,
        text: 'Добавьте свечи к тортам для праздника!',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      });
    }

    // Проверяем, есть ли торты без упаковки
    const cakesWithoutPackaging = items.filter(item => 
      item.type === 'custom' && 
      (!item.configuration?.packaging || item.configuration.packaging === 'standard')
    );
    
    if (cakesWithoutPackaging.length > 0) {
      reminders.push({
        icon: <Package className="w-4 h-4" />,
        text: 'Выберите красивую упаковку для ваших тортов!',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      });
    }

    // Проверяем, есть ли торты без персонального текста
    const cakesWithoutText = items.filter(item => 
      item.type === 'custom' && 
      (!item.configuration?.customText || item.configuration.customText.trim() === '')
    );
    
    if (cakesWithoutText.length > 0) {
      reminders.push({
        icon: <Gift className="w-4 h-4" />,
        text: 'Добавьте персональную надпись на торт!',
        color: 'text-pink-600',
        bgColor: 'bg-pink-50'
      });
    }

    return reminders;
  };

  if (!isMounted || !isOpen) return null;

  const reminders = getReminders();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={toggleCart}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Корзина ({getTotalItems()})
            </h2>
            <button
              onClick={toggleCart}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Корзина пуста
                </h3>
                <p className="text-gray-500 mb-6">
                  Добавьте торты из каталога или создайте свой в конструкторе
                </p>
                <Link
                  href="/catalog"
                  onClick={toggleCart}
                  className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
                >
                  Посмотреть каталог
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Items */}
                {items.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          {item.type === 'custom' ? 'Кастомный торт' : 'Готовый торт'}
                        </p>
                        {item.configuration && (
                          <div className="mt-2 text-xs text-gray-600">
                            {item.configuration.size && (
                              <p>Размер: {item.configuration.size}</p>
                            )}
                            {item.configuration.layers.length > 0 && (
                              <p>Слои: {item.configuration.layers.length}</p>
                            )}
                            {item.configuration.candles > 0 && (
                              <p>Свечи: {item.configuration.candles}</p>
                            )}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-lg font-semibold text-pink-600">
                        {formatPrice(item.price * item.quantity)}₽
                      </div>
                    </div>
                  </div>
                ))}

                {/* Reminders */}
                {reminders.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Рекомендации:</h4>
                    {reminders.map((reminder, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-3 rounded-lg ${reminder.bgColor}`}
                      >
                        <div className={reminder.color}>
                          {reminder.icon}
                        </div>
                        <p className={`text-sm ${reminder.color}`}>
                          {reminder.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  Итого:
                </span>
                <span className="text-2xl font-bold text-pink-600">
                  {formatPrice(getTotalPrice())}₽
                </span>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => {
                    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                    const orderText = `🍰 Заказ тортов Daisy Cake

📋 Состав заказа:
${items.map(item => `• ${item.name} - ${item.quantity} шт. × ${item.price}₽ = ${item.price * item.quantity}₽`).join('\n')}

💰 Общая сумма: ${totalPrice}₽

📞 Телефон: [укажите ваш номер]
📍 Адрес доставки: [укажите адрес]
📅 Желаемая дата: [укажите дату]
🕐 Желаемое время: [укажите время]

Спасибо за заказ! 🎂`;

                    const telegramUrl = `https://t.me/daisy_cake_sochi?text=${encodeURIComponent(orderText)}`;
                    
                    // Попробуем открыть в новом окне, если не получится - в том же окне
                    const newWindow = window.open(telegramUrl, '_blank');
                    if (!newWindow) {
                      // Если popup заблокирован, открываем в том же окне
                      window.location.href = telegramUrl;
                    }
                    toggleCart();
                  }}
                  className="w-full bg-pink-500 text-white py-3 px-4 rounded-full hover:bg-pink-600 transition-colors text-center block font-medium"
                >
                  Оформить заказ
                </button>
                <Link
                  href="/builder"
                  onClick={toggleCart}
                  className="w-full border border-pink-500 text-pink-500 py-3 px-4 rounded-full hover:bg-pink-50 transition-colors text-center block font-medium"
                >
                  Создать еще торт
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
