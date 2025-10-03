'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCakeStore } from '@/store/cakeStore';
import { Plus, Minus, Trash2, AlertTriangle } from 'lucide-react';

const CakeConstructor = () => {
  const {
    selectedSize,
    selectedLayers,
    selectedFillings,
    selectedDecorations,
    selectedPackaging,
    selectedCandles,
    customText,
    customImage,
    availableSizes,
    availableLayers,
    availableFillings,
    availableDecorations,
    availablePackaging,
    setSize,
    addLayer,
    removeLayer,
    addFilling,
    removeFilling,
    addDecoration,
    removeDecoration,
    setPackaging,
    setCandles,
    setCustomText,
    setCustomImage,
    getTotalPrice,
    validateConfiguration
  } = useCakeStore();

  const [activeTab, setActiveTab] = useState('size');

  const validation = validateConfiguration();
  const totalPrice = getTotalPrice();

  const tabs = [
    { id: 'size', name: 'Размер', icon: '📏' },
    { id: 'layers', name: 'Слои', icon: '🍰' },
    { id: 'fillings', name: 'Начинки', icon: '🥄' },
    { id: 'decorations', name: 'Декор', icon: '✨' },
    { id: 'packaging', name: 'Упаковка', icon: '🎁' },
    { id: 'extras', name: 'Дополнительно', icon: '🕯️' }
  ];

  const renderSizeSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите размер торта</h3>
      <div className="grid grid-cols-2 gap-4">
        {availableSizes.map((size) => (
          <motion.button
            key={size.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSize(size)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedSize.id === size.id
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200 hover:border-pink-300'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{size.name}</div>
              <div className="text-sm text-gray-600">
                Ø{size.diameter}см • {size.servings} порций
              </div>
              <div className="text-lg font-semibold text-pink-600 mt-2">
                {size.basePrice}₽
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderLayerSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите слои торта</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableLayers.map((layer) => (
          <motion.div
            key={layer.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 border border-gray-200 rounded-lg hover:border-pink-300 transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🍰</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{layer.name}</div>
                <div className="text-sm text-gray-600">{layer.description}</div>
                <div className="text-sm text-pink-600 font-semibold">
                  {layer.price > 0 ? `+${layer.price}₽` : 'Включено'}
                </div>
              </div>
              <button
                onClick={() => addLayer(layer)}
                className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Выбранные слои */}
      {selectedLayers.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Выбранные слои:</h4>
          <div className="space-y-2">
            {selectedLayers.map((layer) => (
              <div key={layer.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>{layer.name}</span>
                <button
                  onClick={() => removeLayer(layer.id)}
                  className="p-1 text-red-500 hover:bg-red-100 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderFillingSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите начинки</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableFillings.map((filling) => (
          <motion.div
            key={filling.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 border border-gray-200 rounded-lg hover:border-pink-300 transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🥄</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{filling.name}</div>
                <div className="text-sm text-gray-600">{filling.description}</div>
                <div className="text-sm text-pink-600 font-semibold">
                  +{filling.price}₽
                </div>
              </div>
              <button
                onClick={() => addFilling(filling)}
                className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Выбранные начинки */}
      {selectedFillings.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Выбранные начинки:</h4>
          <div className="space-y-2">
            {selectedFillings.map((filling) => (
              <div key={filling.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>{filling.name}</span>
                <button
                  onClick={() => removeFilling(filling.id)}
                  className="p-1 text-red-500 hover:bg-red-100 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderDecorationSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите декор</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableDecorations.map((decoration) => (
          <motion.div
            key={decoration.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 border border-gray-200 rounded-lg hover:border-pink-300 transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{decoration.name}</div>
                <div className="text-sm text-gray-600">{decoration.description}</div>
                <div className="text-sm text-pink-600 font-semibold">
                  +{decoration.price}₽
                </div>
              </div>
              <button
                onClick={() => addDecoration(decoration)}
                className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Выбранные декорации */}
      {selectedDecorations.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Выбранный декор:</h4>
          <div className="space-y-2">
            {selectedDecorations.map((decoration) => (
              <div key={decoration.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>{decoration.name}</span>
                <button
                  onClick={() => removeDecoration(decoration.id)}
                  className="p-1 text-red-500 hover:bg-red-100 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderPackagingSelector = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Выберите упаковку</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {availablePackaging.map((pkg) => (
          <motion.button
            key={pkg.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setPackaging(pkg)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedPackaging.id === pkg.id
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200 hover:border-pink-300'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🎁</div>
              <div className="font-semibold">{pkg.name}</div>
              <div className="text-sm text-gray-600">{pkg.description}</div>
              <div className="text-lg font-semibold text-pink-600 mt-2">
                {pkg.price > 0 ? `+${pkg.price}₽` : 'Включено'}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderExtras = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Дополнительно</h3>
      
      {/* Свечи */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Количество свечей
        </label>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCandles(Math.max(0, selectedCandles - 1))}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-50"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-lg font-semibold w-8 text-center">{selectedCandles}</span>
          <button
            onClick={() => setCandles(selectedCandles + 1)}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-50"
          >
            <Plus className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-600">× 50₽ = {selectedCandles * 50}₽</span>
        </div>
      </div>

      {/* Персональный текст */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Персональный текст на торте
        </label>
        <input
          type="text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Введите текст для торта..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          maxLength={50}
        />
        <div className="text-xs text-gray-500 mt-1">
          {customText.length}/50 символов
        </div>
      </div>

      {/* Загрузка изображения */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Загрузить изображение для торта
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-300 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => setCustomImage(e.target?.result as string);
                reader.readAsDataURL(file);
              }
            }}
            className="hidden"
            id="custom-image"
          />
          <label htmlFor="custom-image" className="cursor-pointer">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-sm text-gray-600">
              {customImage ? 'Изображение загружено' : 'Нажмите для загрузки'}
            </div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderCakePreview = () => (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-center">Ваш торт</h3>
      <div className="flex justify-center mb-4">
        <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full flex items-center justify-center text-4xl">
          🎂
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Размер:</span>
          <span className="font-semibold">{selectedSize.name}</span>
        </div>
        <div className="flex justify-between">
          <span>Слои:</span>
          <span className="font-semibold">{selectedLayers.length}</span>
        </div>
        <div className="flex justify-between">
          <span>Начинки:</span>
          <span className="font-semibold">{selectedFillings.length}</span>
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
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Конструктор тортов</h1>
        <p className="text-lg text-gray-600">
          Создайте свой уникальный торт, выбрав все компоненты
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Левая панель - настройки */}
        <div className="lg:col-span-2">
          {/* Табы */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Контент табов */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'size' && renderSizeSelector()}
                {activeTab === 'layers' && renderLayerSelector()}
                {activeTab === 'fillings' && renderFillingSelector()}
                {activeTab === 'decorations' && renderDecorationSelector()}
                {activeTab === 'packaging' && renderPackagingSelector()}
                {activeTab === 'extras' && renderExtras()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Предупреждения */}
          {validation.warnings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
            >
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Обратите внимание:</h4>
                  <ul className="mt-1 text-sm text-yellow-700">
                    {validation.warnings.map((warning, index) => (
                      <li key={index}>• {warning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Правая панель - превью и заказ */}
        <div className="space-y-6">
          {renderCakePreview()}

          {/* Итоговая стоимость */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Итого</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Базовый торт:</span>
                <span>{selectedSize.basePrice}₽</span>
              </div>
              {selectedLayers.map((layer) => (
                <div key={layer.id} className="flex justify-between text-gray-600">
                  <span>+ {layer.name}:</span>
                  <span>+{layer.price}₽</span>
                </div>
              ))}
              {selectedFillings.map((filling) => (
                <div key={filling.id} className="flex justify-between text-gray-600">
                  <span>+ {filling.name}:</span>
                  <span>+{filling.price}₽</span>
                </div>
              ))}
              {selectedDecorations.map((decoration) => (
                <div key={decoration.id} className="flex justify-between text-gray-600">
                  <span>+ {decoration.name}:</span>
                  <span>+{decoration.price}₽</span>
                </div>
              ))}
              {selectedPackaging.price > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>+ {selectedPackaging.name}:</span>
                  <span>+{selectedPackaging.price}₽</span>
                </div>
              )}
              {selectedCandles > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>+ Свечи ({selectedCandles} шт.):</span>
                  <span>+{selectedCandles * 50}₽</span>
                </div>
              )}
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Итого:</span>
                <span className="text-pink-600">{totalPrice}₽</span>
              </div>
            </div>
          </div>

          {/* Кнопки заказа */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Заказать сейчас
            </button>
            <button className="w-full border-2 border-pink-500 text-pink-500 font-semibold py-3 px-6 rounded-lg hover:bg-pink-50 transition-colors">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeConstructor;
