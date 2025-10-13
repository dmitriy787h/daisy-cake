'use client';

import { useState } from 'react';

const SimpleCakeConstructor = () => {
  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedShape, setSelectedShape] = useState('round');
  const [selectedLayer, setSelectedLayer] = useState<string>('');
  const [selectedFilling, setSelectedFilling] = useState<string>('');
  const [decorationComment, setDecorationComment] = useState('');
  const [candles, setCandles] = useState(0);
  const [customText, setCustomText] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const shapes = [
    { id: 'round', name: 'Круглый', price: 0, icon: '⭕' },
    { id: 'heart', name: 'В форме сердца', price: 100, icon: '❤️' }
  ];

  const sizes = [
    { id: 'bento', name: 'Бенто', price: 800, diameter: 11 },
    { id: 'small', name: 'Торты от 1кг', price: 1500, diameter: 18 },
    { id: 'large', name: 'Большие торты больше 1кг', price: 2800, diameter: 24 }
  ];

  const layers = [
    { id: 'vanilla', name: 'Ванильный бисквит' },
    { id: 'chocolate', name: 'Шоколадный бисквит' },
    { id: 'red-velvet', name: 'Красный бархат' },
    { id: 'honey', name: 'Медовый' }
  ];

  const fillings = [
    { id: 'strawberry', name: 'Клубничная', price: 0 },
    { id: 'cherry', name: 'Вишневая', price: 0 },
    { id: 'caramel', name: 'Карамель', price: 0 },
    { id: 'caramel-peanut', name: 'Карамель и арахис', price: 0 },
    { id: 'caramel-banana', name: 'Карамель и банан', price: 0 },
    { id: 'coconut', name: 'Кокосовое', price: 0 }
  ];



  const calculatePrice = () => {
    const sizePrice = sizes.find(s => s.id === selectedSize)?.price || 0;
    const shapePrice = shapes.find(s => s.id === selectedShape)?.price || 0;
    // Бисквит включен в базовую стоимость
    const layerPrice = 0;
    const fillingPrice = selectedFilling ? (fillings.find(f => f.id === selectedFilling)?.price || 0) : 0;
    // Декор рассчитывается индивидуально менеджером
    const decorationPrice = 0;
    const candlesPrice = candles * 50;
    const textPrice = customText ? 50 : 0;

    return sizePrice + shapePrice + layerPrice + fillingPrice + decorationPrice + candlesPrice + textPrice;
  };


  const totalPrice = calculatePrice();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Конструктор тортов</h1>
        <p className="text-lg text-gray-600">Создайте свой уникальный торт</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Левая панель - настройки */}
        <div className="space-y-8">
          {/* Форма и размер */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Форма и размер торта</h2>
            
            {/* Форма торта */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Форма</h3>
              <div className="grid grid-cols-2 gap-4">
                {shapes.map((shape) => (
                  <button
                    key={shape.id}
                    onClick={() => setSelectedShape(shape.id)}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      selectedShape === shape.id
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{shape.icon}</div>
                    <div className="font-semibold">{shape.name}</div>
                    <div className="text-pink-600">{shape.price > 0 ? `+${shape.price}₽` : 'Включено'}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Размер торта */}
            <div>
              <h3 className="text-lg font-medium mb-3">Размер</h3>
              <div className="grid grid-cols-3 gap-4">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      selectedSize === size.id
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="font-semibold">{size.name}</div>
                    <div className="text-pink-600">{size.price}₽</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Бисквит */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Бисквит</h2>
            <div className="space-y-3">
              {layers.map((layer) => (
                <div 
                  key={layer.id} 
                  className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedLayer(layer.id)}
                >
                  <div>
                    <div className="font-medium">{layer.name}</div>
                    <div className="text-sm text-gray-600">
                      Включено в стоимость
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedLayer === layer.id
                      ? 'bg-pink-500 border-pink-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedLayer === layer.id && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Начинки */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Начинки</h2>
            <div className="space-y-3">
              {fillings.map((filling) => (
                <div key={filling.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{filling.name}</div>
                    <div className="text-sm text-gray-600">Включено</div>
                  </div>
                  <button
                    onClick={() => setSelectedFilling(selectedFilling === filling.id ? '' : filling.id)}
                    className={`px-4 py-2 rounded ${
                      selectedFilling === filling.id
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {selectedFilling === filling.id ? 'Выбрано' : 'Выбрать'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Декор */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Декор</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Опишите желаемый декор
              </label>
              <textarea
                value={decorationComment}
                onChange={(e) => setDecorationComment(e.target.value)}
                placeholder="Например: свежие ягоды, шоколадная крошка, сахарные цветы, макаруны..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                rows={4}
                maxLength={200}
              />
              <div className="text-xs text-gray-500 mt-1">
                {decorationComment.length}/200 символов
              </div>
              <div className="text-sm text-gray-600 mt-2">
                💡 Менеджер рассчитает стоимость декора индивидуально
              </div>
            </div>
          </div>


          {/* Дополнительно */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Дополнительно</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Количество свечей
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCandles(Math.max(0, candles - 1))}
                  className="px-3 py-1 border rounded hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">{candles}</span>
                <button
                  onClick={() => setCandles(candles + 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-50"
                >
                  +
                </button>
                <span className="text-sm text-gray-600">× 50₽ = {candles * 50}₽</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Персональный текст
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Введите текст для торта..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                maxLength={50}
              />
              <div className="text-xs text-gray-500 mt-1">
                {customText.length}/50 символов {customText && '+50₽'}
              </div>
            </div>
          </div>
        </div>

        {/* Правая панель - превью и заказ */}
        <div className="space-y-6">
          {/* Превью */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-center">Ваш торт</h2>
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full flex items-center justify-center text-4xl">
                🎂
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Форма:</span>
                <span className="font-semibold">{shapes.find(s => s.id === selectedShape)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Размер:</span>
                <span className="font-semibold">{sizes.find(s => s.id === selectedSize)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Бисквит:</span>
                <span className="font-semibold">{selectedLayer ? 1 : 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Начинки:</span>
                <span className="font-semibold">{selectedFilling ? fillings.find(f => f.id === selectedFilling)?.name || 'Выбрано' : 'Не выбрано'}</span>
              </div>
              <div className="flex justify-between">
                <span>Декор:</span>
                <span className="font-semibold">{decorationComment ? 'Указан' : 'Не указан'}</span>
              </div>
              {candles > 0 && (
                <div className="flex justify-between">
                  <span>Свечи:</span>
                  <span className="font-semibold">{candles} шт.</span>
                </div>
              )}
              {customText && (
                <div className="flex justify-between">
                  <span>Текст:</span>
                  <span className="font-semibold">&ldquo;{customText}&rdquo;</span>
                </div>
              )}
            </div>
          </div>

          {/* Цена */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Итого</h2>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">{totalPrice}₽</div>
            </div>
          </div>

          {/* Форма заказа */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Оформить заказ</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              
              const orderText = `🍰 Заказ кастомного торта Daisy Cake

👤 Клиент: ${customerName || 'Не указано'}
📞 Телефон: ${customerPhone || 'Не указано'}

🎂 Конфигурация торта:
• Размер: ${sizes.find(s => s.id === selectedSize)?.name || selectedSize}
• Форма: ${shapes.find(s => s.id === selectedShape)?.name || selectedShape}
• Бисквит: ${selectedLayer ? layers.find(l => l.id === selectedLayer)?.name || 'Не выбран' : 'Не выбран'}
• Начинки: ${selectedFilling ? fillings.find(f => f.id === selectedFilling)?.name || 'Не выбрана' : 'Не выбрана'}
• Декор: ${decorationComment || 'Не указан'}
• Свечи: ${candles} шт.
${customText ? `• Персональная надпись: "${customText}"` : ''}

💰 Общая стоимость: ${totalPrice}₽

📸 Наш инстаграм: https://www.instagram.com/daisy.cake.sochi?igsh=dWYzMXZkNDBtMnJ3

Спасибо за заказ! 🎂`;

              const telegramUrl = `https://t.me/daisy_cake_sochi?text=${encodeURIComponent(orderText)}`;
              
              // Попробуем открыть в новом окне, если не получится - в том же окне
              const newWindow = window.open(telegramUrl, '_blank');
              if (!newWindow) {
                // Если popup заблокирован, открываем в том же окне
                window.location.href = telegramUrl;
              }
            }} className="space-y-4">

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="+7 (938) 405-25-90"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                Заказать за {totalPrice}₽
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCakeConstructor;

