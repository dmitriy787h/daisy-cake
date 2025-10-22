'use client';

import { useState } from 'react';

const FullMobileConstructor = () => {
  
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSize, setSelectedSize] = useState('1kg');
  const [selectedShape, setSelectedShape] = useState('round');
  const [selectedLayer, setSelectedLayer] = useState<string>('');
  const [selectedFilling, setSelectedFilling] = useState<string>('');
  const [decorationComment, setDecorationComment] = useState('');
  const [handmadeCandles, setHandmadeCandles] = useState(0);
  const [numberCandles, setNumberCandles] = useState(0);
  const [customText, setCustomText] = useState('');


  const steps = [
    { id: 'shape', name: 'Форма', icon: '🎂' },
    { id: 'size', name: 'Размер', icon: '📏' },
    { id: 'layers', name: 'Бисквит', icon: '🍰' },
    { id: 'fillings', name: 'Начинки', icon: '🥄' },
    { id: 'decorations', name: 'Декор', icon: '✨' },
    { id: 'extras', name: 'Дополнительно', icon: '🕯️' }
  ];

  const shapes = [
    { id: 'round', name: 'Круглый', price: 0, icon: '⭕' },
    { id: 'heart', name: 'В форме сердца', price: 100, icon: '❤️' }
  ];

  const sizes = [
    { id: 'bento', name: 'Бенто', price: 1499, diameter: 11, servings: 2 },
    { id: '1kg', name: '1 кг', price: 2500, diameter: 14, servings: 6 },
    { id: '1.5kg', name: '1,5 кг', price: 3000, diameter: '14-16', servings: 8 },
    { id: '2kg', name: '2 кг', price: 4000, diameter: '16-18', servings: 10 },
    { id: '2.5kg', name: '2,5 кг', price: 5000, diameter: '16-18', servings: 12 },
    { id: '3kg', name: '3 кг', price: 6000, diameter: '18-20', servings: 14 },
    { id: '3.5kg', name: '3,5 кг', price: 7000, diameter: '18-20', servings: 16 },
    { id: '4kg', name: '4 кг', price: 8000, diameter: '18-20', servings: 18 }
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
    const candlesPrice = handmadeCandles * 60 + numberCandles * 220;
    const textPrice = customText ? 50 : 0;

    return sizePrice + shapePrice + layerPrice + fillingPrice + decorationPrice + candlesPrice + textPrice;
  };


  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const totalPrice = calculatePrice();

  const renderStepContent = () => {
    const step = steps[currentStep];
    
    if (!step) {
      console.error('FullMobileConstructor: Invalid step index:', currentStep, 'Steps length:', steps.length);
      return (
        <div className="text-center text-red-500">
          <p>Ошибка: неверный шаг конструктора</p>
          <p>Шаг: {currentStep}, Всего шагов: {steps.length}</p>
        </div>
      );
    }
    
    
    switch (step.id) {
      case 'shape':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center mb-6">Выберите форму торта</h2>
            <div className="space-y-3">
              {shapes.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => setSelectedShape(shape.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedShape === shape.id
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{shape.icon}</span>
                      <div>
                        <div className="font-semibold text-lg">{shape.name}</div>
                        <div className="text-sm text-gray-600">
                          {shape.price > 0 ? `+${shape.price}₽` : 'Включено'}
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-pink-600">
                      {shape.price > 0 ? `+${shape.price}₽` : 'Включено'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'size':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center mb-6">Выберите размер торта</h2>
            <div className="space-y-3">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    selectedSize === size.id
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-lg">{size.name}</div>
                      <div className="text-sm text-gray-600">
                        Ø{size.diameter}см • {size.servings} порций
                      </div>
                    </div>
                    <div className="text-lg font-bold text-pink-600">от {size.price}₽</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'layers':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center mb-6">Выберите слои торта</h2>
            <div className="space-y-3">
              {layers.map((layer) => (
                <div 
                  key={layer.id} 
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedLayer(layer.id)}
                >
                  <div className="flex-1">
                    <div className="font-semibold">{layer.name}</div>
                    <div className="text-sm text-gray-600">
                      Включено в стоимость
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedLayer === layer.id
                      ? 'bg-pink-500 border-pink-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedLayer === layer.id && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'fillings':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center mb-6">Выберите начинку</h2>
            <div className="space-y-3">
              {fillings.map((filling) => (
                <div key={filling.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-semibold">{filling.name}</div>
                    <div className="text-sm text-gray-600">Включено</div>
                  </div>
                  <button
                    onClick={() => setSelectedFilling(selectedFilling === filling.id ? '' : filling.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedFilling === filling.id
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {selectedFilling === filling.id ? 'Выбрано' : 'Выбрать'}
                  </button>
                </div>
              ))}
            </div>
            {selectedFilling && (
              <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                <div className="text-sm font-medium text-pink-800 mb-2">Выбранная начинка:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded-full text-xs">
                    {fillings.find(f => f.id === selectedFilling)?.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        );

      case 'decorations':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center mb-6">Декор</h2>
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
        );

      case 'extras':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center mb-6">Дополнительно</h2>
            
            {/* Свечи ручной работы */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                🕯️ Свечи ручной работы
              </label>
              <div className="flex items-center justify-center space-x-6">
                <button
                  onClick={() => setHandmadeCandles(Math.max(0, handmadeCandles - 1))}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <span className="text-xl">-</span>
                </button>
                <span className="text-2xl font-bold w-12 text-center">{handmadeCandles}</span>
                <button
                  onClick={() => setHandmadeCandles(handmadeCandles + 1)}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>
              <div className="text-center text-sm text-gray-600 mt-2">
                × 60₽ = {handmadeCandles * 60}₽
              </div>
            </div>

            {/* Свечи-цифры */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                🔢 Свечи-цифры
              </label>
              <div className="flex items-center justify-center space-x-6">
                <button
                  onClick={() => setNumberCandles(Math.max(0, numberCandles - 1))}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <span className="text-xl">-</span>
                </button>
                <span className="text-2xl font-bold w-12 text-center">{numberCandles}</span>
                <button
                  onClick={() => setNumberCandles(numberCandles + 1)}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>
              <div className="text-center text-sm text-gray-600 mt-2">
                × от 220₽ = от {numberCandles * 220}₽
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Персональный текст на торте
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Введите текст для торта..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
                maxLength={50}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>{customText.length}/50 символов</span>
                {customText && <span className="text-pink-600">+50₽</span>}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  
  // Проверяем, что все данные доступны
  if (!steps || steps.length === 0) {
    console.error('FullMobileConstructor: Steps array is empty or undefined');
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-500">
          <h2 className="text-xl font-semibold mb-4">Ошибка инициализации</h2>
          <p>Массив шагов не определен</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Простой header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-center mb-2">
            <div className="relative">
              <img 
                src="/images/logo/logo.png" 
                alt="Daisy Cake" 
                className="h-10 w-auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = 'none';
                  const next = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = 'flex';
                }}
              />
              <div 
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center"
                style={{ display: 'none' }}
              >
                <span className="text-white font-bold text-lg">D</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-600">
              Шаг {currentStep + 1} из {steps.length}
            </span>
          </div>
        </div>
      </div>

      {/* Прогресс-бар */}
      <div className="bg-white px-4 py-2 border-b">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Контент */}
      <div className="px-4 py-6">
        {renderStepContent()}
      </div>

      {/* Навигация */}
      <div className="bg-white border-t sticky bottom-0 px-4 py-4">
        <div className="flex space-x-3">
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <span>←</span>
              <span>Назад</span>
            </button>
          )}
          
          {currentStep < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className="flex-1 bg-pink-500 text-white py-3 px-4 rounded-lg hover:bg-pink-600 flex items-center justify-center space-x-2"
            >
              <span>Далее</span>
              <span>→</span>
            </button>
          ) : (
            <button
              onClick={() => {
                const selectedShapeData = shapes.find(s => s.id === selectedShape);
                const selectedSizeData = sizes.find(s => s.id === selectedSize);
                // Бисквит теперь одиночный выбор
                const selectedFillingData = fillings.find(f => f.id === selectedFilling);

                const orderText = `🍰 Заказ кастомного торта Daisy Cake

👤 Клиент: [укажите ваше имя]
📞 Телефон: [укажите ваш номер]

🎂 Конфигурация торта:
• Форма: ${selectedShapeData?.name} ${selectedShapeData?.price && selectedShapeData.price > 0 ? `(+${selectedShapeData.price}₽)` : ''}
• Размер: ${selectedSizeData?.name} (${selectedSizeData?.diameter}см, ${selectedSizeData?.servings} порций) ${selectedSizeData?.price && selectedSizeData.price > 0 ? `(+${selectedSizeData.price}₽)` : ''}
• Бисквит: ${selectedLayer ? layers.find(l => l.id === selectedLayer)?.name || 'Не выбран' : 'Не выбран'}
• Начинка: ${selectedFillingData?.name || 'Не выбрана'}
• Декор: ${decorationComment || 'Не указан'}
${handmadeCandles > 0 ? `• Свечи ручной работы: ${handmadeCandles} шт. × 60₽ = ${handmadeCandles * 60}₽` : ''}
${numberCandles > 0 ? `• Свечи-цифры: ${numberCandles} шт. × от 220₽ = от ${numberCandles * 220}₽` : ''}
${customText ? `• Персональная надпись: "${customText}"` : ''}

💰 Общая стоимость: ${totalPrice}₽

📍 Адрес доставки: [укажите адрес] (доставка рассчитывается отдельно)
📅 Желаемая дата: [укажите дату]
🕐 Желаемое время: [укажите время]


Спасибо за заказ! 🎂

Наш менеджер свяжется с Вами для обсуждения деталей заказа) 

Обращаем Ваше внимание на то, что заказ считается принятым только после согласования всех деталей, даты и времени с менеджером, а также внесения оплаты! 

Спасибо, что выбираете нас ❤️`;

                const telegramUrl = `https://t.me/daisy_cake_sochi?text=${encodeURIComponent(orderText)}`;
                
                // Попробуем открыть в новом окне, если не получится - в том же окне
                const newWindow = window.open(telegramUrl, '_blank');
                if (!newWindow) {
                  // Если popup заблокирован, открываем в том же окне
                  window.location.href = telegramUrl;
                }
              }}
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700"
            >
              Заказать за {totalPrice}₽
            </button>
          )}
        </div>
      </div>

      {/* Плавающая кнопка превью */}
      <div className="fixed bottom-20 right-4 z-20">
        <button
          onClick={() => {
            const preview = document.getElementById('cake-preview');
            if (preview) {
              preview.classList.toggle('hidden');
            }
          }}
          className="w-14 h-14 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 flex items-center justify-center text-2xl"
        >
          🎂
        </button>
      </div>

      {/* Модальное окно превью */}
      <div id="cake-preview" className="fixed inset-0 bg-black bg-opacity-50 z-30 hidden">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Ваш торт</h3>
              <button
                onClick={() => {
                  const preview = document.getElementById('cake-preview');
                  if (preview) {
                    preview.classList.add('hidden');
                  }
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="text-xl">×</span>
              </button>
            </div>
            
            <div className="text-center mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🎂
              </div>
            </div>
            
            <div className="space-y-2 text-sm mb-4">
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
                <span className="font-semibold">{selectedLayer ? layers.find(l => l.id === selectedLayer)?.name || 'Не выбран' : 'Не выбран'}</span>
              </div>
              <div className="flex justify-between">
                <span>Начинки:</span>
                <span className="font-semibold">{selectedFilling ? fillings.find(f => f.id === selectedFilling)?.name || 'Выбрано' : 'Не выбрано'}</span>
              </div>
              <div className="flex justify-between">
                <span>Декор:</span>
                <span className="font-semibold">{decorationComment ? 'Указан' : 'Не указан'}</span>
              </div>
              {handmadeCandles > 0 && (
                <div className="flex justify-between">
                  <span>Свечи ручной работы:</span>
                  <span className="font-semibold">{handmadeCandles} шт. × 60₽ = {handmadeCandles * 60}₽</span>
                </div>
              )}
              {numberCandles > 0 && (
                <div className="flex justify-between">
                  <span>Свечи-цифры:</span>
                  <span className="font-semibold">{numberCandles} шт. × от 220₽ = от {numberCandles * 220}₽</span>
                </div>
              )}
              {customText && (
                <div className="flex justify-between">
                  <span>Текст:</span>
                  <span className="font-semibold">"{customText}"</span>
                </div>
              )}
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">{totalPrice}₽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMobileConstructor;

