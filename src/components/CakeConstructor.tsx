'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface ConstructorForm {
  customerName: string;
  phone: string;
  email?: string;
  deliveryDate: string;
  deliveryTime: string;
  deliveryAddress?: string;
  notes?: string;
}

const CakeConstructor = () => {
  const [activeTab, setActiveTab] = useState('size');
  
  // Локальное состояние
  const [selectedSize, setSelectedSize] = useState({
    id: 'small',
    name: 'Торты от 1кг',
    basePrice: 1500,
    diameter: 18,
    servings: 6,
    height: 8
  });

  const [selectedShape, setSelectedShape] = useState('round');
  const [selectedLayer, setSelectedLayer] = useState<string>('');
  const [selectedFilling, setSelectedFilling] = useState<string>('');
  const [selectedDecorations, setSelectedDecorations] = useState<string[]>([]);
  const [selectedPackaging, setSelectedPackaging] = useState('standard');
  const [selectedCandles, setSelectedCandles] = useState(0);
  const [customText, setCustomText] = useState('');

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

  const decorations = [
    { id: 'fresh-fruits', name: 'Свежие фрукты', price: 300 },
    { id: 'chocolate-chips', name: 'Шоколадная крошка', price: 150 },
    { id: 'sugar-flowers', name: 'Сахарные цветы', price: 500 },
    { id: 'macarons', name: 'Макаруны', price: 400 }
  ];

  const packaging = [
    { id: 'standard', name: 'Стандартная упаковка', price: 0 },
    { id: 'premium', name: 'Подарочная упаковка', price: 200 }
  ];

  const calculateTotalPrice = () => {
    let total = selectedSize.basePrice;
    
    // Добавляем цену за форму
    const shapePrice = shapes.find(s => s.id === selectedShape)?.price || 0;
    total += shapePrice;
    
    // Бисквит включен в базовую стоимость
    
    // Добавляем цену за начинку
    if (selectedFilling) {
      const filling = fillings.find(f => f.id === selectedFilling);
      if (filling) total += filling.price;
    }
    
    // Добавляем цену за декор
    selectedDecorations.forEach(decorationId => {
      const decoration = decorations.find(d => d.id === decorationId);
      if (decoration) total += decoration.price;
    });
    
    // Добавляем цену за упаковку
    const packagingPrice = packaging.find(p => p.id === selectedPackaging)?.price || 0;
    total += packagingPrice;
    
    // Добавляем цену за свечи
    total += selectedCandles * 50;
    
    // Добавляем цену за текст
    if (customText) total += 50;
    
    // Скидка за большие заказы
    if (total > 5000) {
      total = Math.floor(total * 0.95);
    }
    
    return total;
  };

  const tabs = [
    { id: 'size', name: 'Размер', icon: '📏', step: 1 },
    { id: 'layers', name: 'Бисквит', icon: '🍰', step: 2 },
    { id: 'fillings', name: 'Начинки', icon: '🥄', step: 3 },
    { id: 'decorations', name: 'Декор', icon: '✨', step: 4 },
    { id: 'extras', name: 'Дополнительно', icon: '🕯️', step: 5 }
  ];

  const [formData, setFormData] = useState<ConstructorForm>({
    customerName: '',
    phone: '',
    email: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryAddress: '',
    notes: ''
  });

  const totalPrice = calculateTotalPrice();

  const renderSizeSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите размер торта</h3>
      <div className="grid grid-cols-3 gap-4">
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => setSelectedSize({
              id: size.id,
              name: size.name,
              basePrice: size.price,
              diameter: size.diameter,
              servings: size.diameter === 11 ? 2 : size.diameter === 18 ? 6 : 12,
              height: 8
            })}
            className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
              selectedSize.id === size.id
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200 hover:border-pink-300'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🍰</div>
              <div className="font-semibold">{size.name}</div>
              <div className="text-sm text-gray-600">Ø{size.diameter}см</div>
              <div className="text-lg font-bold text-pink-600">{size.price}₽</div>
            </div>
          </button>
        ))}
      </div>
      
      {/* Выбор формы */}
      <div className="mt-6">
        <h4 className="text-md font-semibold mb-3">Форма торта</h4>
        <div className="grid grid-cols-2 gap-4">
          {shapes.map((shape) => (
            <button
              key={shape.id}
              onClick={() => setSelectedShape(shape.id)}
              className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                selectedShape === shape.id
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-200 hover:border-pink-300'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl">{shape.icon}</span>
                <span className="font-medium">{shape.name}</span>
                {shape.price > 0 && (
                  <span className="text-sm text-pink-600">+{shape.price}₽</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLayerSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите бисквит *</h3>
      {!selectedLayer && (
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">⚠️ Пожалуйста, выберите бисквит для торта</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {layers.map((layer) => (
          <div
            key={layer.id}
            className={`p-4 border rounded-lg hover:border-pink-300 transition-all hover:scale-105 cursor-pointer ${
              selectedLayer === layer.id
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200'
            }`}
            onClick={() => setSelectedLayer(layer.id)}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🍰</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{layer.name}</div>
                <div className="text-sm text-gray-600">
                  Включено в стоимость
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFillingSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите начинку</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fillings.map((filling) => (
          <div
            key={filling.id}
            className={`p-4 border rounded-lg hover:border-pink-300 transition-all hover:scale-105 cursor-pointer ${
              selectedFilling === filling.id
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200'
            }`}
            onClick={() => setSelectedFilling(selectedFilling === filling.id ? '' : filling.id)}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🥄</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{filling.name}</div>
                <div className="text-sm text-gray-600">Включено</div>
              </div>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                {selectedFilling === filling.id ? 'Выбрано' : 'Выбрать'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDecorationSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите декор</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {decorations.map((decoration) => (
          <div
            key={decoration.id}
            className={`p-4 border rounded-lg hover:border-pink-300 transition-all hover:scale-105 cursor-pointer ${
              selectedDecorations.includes(decoration.id)
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200'
            }`}
            onClick={() => {
              if (selectedDecorations.includes(decoration.id)) {
                setSelectedDecorations(selectedDecorations.filter(id => id !== decoration.id));
              } else {
                setSelectedDecorations([...selectedDecorations, decoration.id]);
              }
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{decoration.name}</div>
                <div className="text-sm text-gray-600">+{decoration.price}₽</div>
              </div>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                {selectedDecorations.includes(decoration.id) ? 'Убрать' : 'Добавить'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExtrasSelector = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Дополнительно</h3>
      
      {/* Свечи */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold mb-3">Свечи</h4>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSelectedCandles(Math.max(0, selectedCandles - 1))}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-lg font-semibold min-w-[2rem] text-center">{selectedCandles}</span>
          <button
            onClick={() => setSelectedCandles(selectedCandles + 1)}
            className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600"
          >
            <Plus className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-600">× 50₽</span>
        </div>
      </div>

      {/* Персональная надпись */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold mb-3">Персональная надпись</h4>
        <input
          type="text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Введите текст для торта"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
        <div className="text-sm text-gray-600 mt-2">+50₽ за надпись</div>
      </div>
    </div>
  );

  const renderCurrentTab = () => {
    switch (activeTab) {
      case 'size':
        return renderSizeSelector();
      case 'layers':
        return renderLayerSelector();
      case 'fillings':
        return renderFillingSelector();
      case 'decorations':
        return renderDecorationSelector();
      case 'extras':
        return renderExtrasSelector();
      default:
        return renderSizeSelector();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Конструктор тортов</h1>
        <p className="text-lg text-gray-600">
          Создайте свой уникальный торт, выбрав все компоненты
        </p>
      </div>

      {/* Прогресс-бар */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Прогресс</span>
          <span className="text-sm font-medium text-gray-700">
            {tabs.findIndex(tab => tab.id === activeTab) + 1} из {tabs.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((tabs.findIndex(tab => tab.id === activeTab) + 1) / tabs.length) * 100}%`
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Левая колонка - Навигация */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h3 className="text-lg font-semibold mb-4">Настройки</h3>
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-pink-100 text-pink-700 border-2 border-pink-300'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Краткая сводка */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-3">Ваш торт</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Размер:</span>
                  <span className="font-semibold">{selectedSize.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Форма:</span>
                  <span className="font-semibold">
                    {shapes.find(s => s.id === selectedShape)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Бисквит:</span>
                  <span className="font-semibold">{selectedLayer ? layers.find(l => l.id === selectedLayer)?.name : 'Не выбран'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Начинки:</span>
                  <span className="font-semibold">{selectedFilling ? 1 : 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Декор:</span>
                  <span className="font-semibold">{selectedDecorations.length}</span>
                </div>
                {selectedCandles > 0 && (
                  <div className="flex justify-between">
                    <span>Свечи:</span>
                    <span className="font-semibold">{selectedCandles} шт.</span>
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
          </div>
        </div>

        {/* Правая колонка - Контент */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            {renderCurrentTab()}
          </div>

          {/* Итоговая стоимость */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Итого</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">{totalPrice}₽</div>
            </div>
          </div>

          {/* Форма заказа */}
          <div className="bg-white rounded-lg p-6 shadow-lg mt-6">
            <h3 className="text-lg font-semibold mb-4">Оформить заказ</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              // Проверяем, что бисквит выбран
              if (!selectedLayer) {
                setActiveTab('layers');
                return;
              }
              
              // Проверяем, что начинка выбрана
              if (!selectedFilling) {
                setActiveTab('fillings');
                return;
              }
              const orderText = `🍰 Заказ кастомного торта Daisy Cake

👤 Клиент: ${formData.customerName}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email}
📍 Адрес доставки: ${formData.deliveryAddress}
📅 Дата доставки: ${formData.deliveryDate}
🕐 Время доставки: ${formData.deliveryTime}
💬 Комментарий: ${formData.notes || 'Нет комментариев'}

🎂 Конфигурация торта:
• Размер: ${selectedSize.name}
• Форма: ${shapes.find(s => s.id === selectedShape)?.name}
• Бисквит: ${selectedLayer ? layers.find(l => l.id === selectedLayer)?.name : 'Не выбран'}
• Начинки: ${selectedFilling ? fillings.find(f => f.id === selectedFilling)?.name : 'Не выбрана'}
• Декор: ${selectedDecorations.map(id => decorations.find(d => d.id === id)?.name).join(', ')}
• Упаковка: ${packaging.find(p => p.id === selectedPackaging)?.name}
• Свечи: ${selectedCandles} шт.
${customText ? `• Персональная надпись: "${customText}"` : ''}

💰 Общая стоимость: ${totalPrice}₽

Спасибо за заказ! 🎂`;

              const telegramUrl = `https://t.me/daisy_cake_sochi?text=${encodeURIComponent(orderText)}`;
              
              // Попробуем открыть в новом окне, если не получится - в том же окне
              const newWindow = window.open(telegramUrl, '_blank');
              if (!newWindow) {
                // Если popup заблокирован, открываем в том же окне
                window.location.href = telegramUrl;
              }
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Имя *
                </label>
                <input
                  value={formData.customerName}
                  onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон *
                </label>
                <input
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="8 (938) 405-25-90"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Адрес доставки
                </label>
                <input
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="г. Сочи, ул. Пластунская, д. 151/5"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Дата доставки *
                  </label>
                  <input
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Время доставки *
                  </label>
                  <input
                    value={formData.deliveryTime}
                    onChange={(e) => setFormData({...formData, deliveryTime: e.target.value})}
                    type="time"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Комментарий
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Дополнительные пожелания..."
                />
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={!selectedLayer || !selectedFilling}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                    !selectedLayer || !selectedFilling
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                  }`}
                >
                  {!selectedLayer || !selectedFilling 
                    ? 'Выберите бисквит и начинку' 
                    : `Заказать за ${totalPrice}₽`
                  }
                </button>
                <button
                  type="button"
                  className="w-full border-2 border-pink-500 text-pink-500 font-semibold py-3 px-6 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  Добавить в корзину
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeConstructor;