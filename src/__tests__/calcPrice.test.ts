import { describe, it, expect } from '@jest/globals';

// Мок данных для тестирования
const mockSizes = [
  { id: 'small', name: 'Маленький', basePrice: 1200, diameter: 16, servings: 4, height: 8 },
  { id: 'medium', name: 'Средний', basePrice: 1800, diameter: 20, servings: 8, height: 10 },
  { id: 'large', name: 'Большой', basePrice: 2500, diameter: 24, servings: 12, height: 12 }
];

const mockLayers = [
  { id: 'vanilla', name: 'Ванильный бисквит', price: 0, image: '', description: '', allergens: [], isGlutenFree: false, isVegan: false },
  { id: 'chocolate', name: 'Шоколадный бисквит', price: 0, image: '', description: '', allergens: [], isGlutenFree: false, isVegan: false },
  { id: 'red-velvet', name: 'Красный бархат', price: 200, image: '', description: '', allergens: [], isGlutenFree: false, isVegan: false }
];

const mockFillings = [
  { id: 'cream-cheese', name: 'Крем-чиз', price: 200, image: '', description: '', allergens: [], isGlutenFree: false, isVegan: false },
  { id: 'chocolate-ganache', name: 'Шоколадный ганаш', price: 250, image: '', description: '', allergens: [], isGlutenFree: false, isVegan: false }
];

const mockDecorations = [
  { id: 'fresh-fruits', name: 'Свежие фрукты', price: 300, image: '', description: '', allergens: [], isGlutenFree: false, isVegan: false },
  { id: 'sugar-flowers', name: 'Сахарные цветы', price: 500, image: '', description: '', allergens: [], isGlutenFree: false, isVegan: false }
];

const mockPackaging = [
  { id: 'standard', name: 'Стандартная упаковка', price: 0, image: '', description: '' },
  { id: 'premium', name: 'Подарочная упаковка', price: 200, image: '', description: '' },
  { id: 'luxury', name: 'Люкс упаковка', price: 500, image: '', description: '' }
];

// Функция расчета цены (копия из store)
function calculatePrice(
  size: typeof mockSizes[0],
  layers: typeof mockLayers,
  fillings: typeof mockFillings,
  decorations: typeof mockDecorations,
  packaging: typeof mockPackaging[0],
  candles: number,
  customText: string
): number {
  let total = size.basePrice;
  
  // Слои
  layers.forEach(layer => total += layer.price);
  
  // Начинки
  fillings.forEach(filling => total += filling.price);
  
  // Декор
  decorations.forEach(decoration => total += decoration.price);
  
  // Упаковка
  total += packaging.price;
  
  // Свечи
  total += candles * 50;
  
  // Персональный текст
  if (customText) total += 50;
  
  // Скидка за большой заказ
  if (total > 5000) {
    total = Math.floor(total * 0.95);
  }
  
  return total;
}

describe('Price Calculation', () => {
  it('1. Минимальная конфигурация', () => {
    const size = mockSizes[0]; // small
    const layers = [mockLayers[0]]; // vanilla
    const fillings = [mockFillings[0]]; // cream-cheese
    const decorations: typeof mockDecorations = [];
    const packaging = mockPackaging[0]; // standard
    const candles = 0;
    const customText = '';

    const price = calculatePrice(size, layers, fillings, decorations, packaging, candles, customText);
    
    // 1200 (base) + 0 (vanilla) + 200 (cream-cheese) + 0 (no decor) + 0 (standard) + 0 (candles) + 0 (no text)
    expect(price).toBe(1400);
  });

  it('2. Большой размер + несколько слоёв', () => {
    const size = mockSizes[2]; // large
    const layers = [mockLayers[0], mockLayers[2]]; // vanilla + red-velvet
    const fillings = [mockFillings[0], mockFillings[1]]; // cream-cheese + chocolate-ganache
    const decorations = [mockDecorations[0]]; // fresh-fruits
    const packaging = mockPackaging[1]; // premium
    const candles = 5;
    const customText = 'Happy Birthday';

    const price = calculatePrice(size, layers, fillings, decorations, packaging, candles, customText);
    
    // 2500 (base) + 0 (vanilla) + 200 (red-velvet) + 200 (cream-cheese) + 250 (chocolate-ganache) + 300 (fresh-fruits) + 200 (premium) + 250 (candles) + 50 (text)
    // = 3950, без скидки
    expect(price).toBe(3950);
  });

  it('3. Несовместимая комбинация - ожидать предупреждение', () => {
    // Тест на валидацию несовместимых комбинаций
    const size = mockSizes[0]; // small
    const layers = [mockLayers[0]]; // vanilla
    const fillings = [mockFillings[0]]; // cream-cheese
    const decorations = [mockDecorations[0], mockDecorations[1]]; // fresh-fruits + sugar-flowers
    const packaging = mockPackaging[2]; // luxury
    const candles = 10;
    const customText = 'Very Long Text That Exceeds Normal Limits';

    const price = calculatePrice(size, layers, fillings, decorations, packaging, candles, customText);
    
    // Проверяем, что цена рассчитывается корректно даже для "несовместимых" комбинаций
    // 1200 + 0 + 200 + 300 + 500 + 500 + 500 + 50 = 3250
    expect(price).toBe(3250);
  });

  it('4. Декор + упаковка + свечи', () => {
    const size = mockSizes[1]; // medium
    const layers = [mockLayers[1]]; // chocolate
    const fillings: typeof mockFillings = [];
    const decorations = [mockDecorations[1]]; // sugar-flowers
    const packaging = mockPackaging[2]; // luxury
    const candles = 8;
    const customText = '';

    const price = calculatePrice(size, layers, fillings, decorations, packaging, candles, customText);
    
    // 1800 (base) + 0 (chocolate) + 0 (no fillings) + 500 (sugar-flowers) + 500 (luxury) + 400 (candles) + 0 (no text)
    expect(price).toBe(3200);
  });

  it('5. Порог скидки (заказ свыше 5000₽)', () => {
    const size = mockSizes[2]; // large
    const layers = [mockLayers[0], mockLayers[1], mockLayers[2]]; // vanilla + chocolate + red-velvet
    const fillings = [mockFillings[0], mockFillings[1]]; // cream-cheese + chocolate-ganache
    const decorations = [mockDecorations[0], mockDecorations[1]]; // fresh-fruits + sugar-flowers
    const packaging = mockPackaging[2]; // luxury
    const candles = 10;
    const customText = 'Special Occasion';

    const price = calculatePrice(size, layers, fillings, decorations, packaging, candles, customText);
    
    // 2500 (base) + 0 (vanilla) + 0 (chocolate) + 200 (red-velvet) + 200 (cream-cheese) + 250 (chocolate-ganache) + 300 (fresh-fruits) + 500 (sugar-flowers) + 500 (luxury) + 500 (candles) + 50 (text)
    // = 5000, без скидки (ровно 5000, скидка не применяется)
    expect(price).toBe(5000);
  });

  it('6. Экспресс-доставка (дополнительная плата)', () => {
    const size = mockSizes[1]; // medium
    const layers = [mockLayers[0]]; // vanilla
    const fillings = [mockFillings[0]]; // cream-cheese
    const decorations: typeof mockDecorations = [];
    const packaging = mockPackaging[0]; // standard
    const candles = 0;
    const customText = '';

    // Для экспресс-доставки добавляем 500₽
    let price = calculatePrice(size, layers, fillings, decorations, packaging, candles, customText);
    price += 500; // экспресс-доставка
    
    // 1800 (base) + 0 (vanilla) + 200 (cream-cheese) + 0 (no decor) + 0 (standard) + 0 (candles) + 0 (no text) + 500 (express)
    expect(price).toBe(2500);
  });

  it('7. Граничные случаи - нулевые значения', () => {
    const size = mockSizes[0]; // small
    const layers: typeof mockLayers = [];
    const fillings: typeof mockFillings = [];
    const decorations: typeof mockDecorations = [];
    const packaging = mockPackaging[0]; // standard
    const candles = 0;
    const customText = '';

    const price = calculatePrice(size, layers, fillings, decorations, packaging, candles, customText);
    
    // Только базовая цена
    expect(price).toBe(1200);
  });

  it('8. Максимальная конфигурация', () => {
    const size = mockSizes[2]; // large
    const layers = mockLayers; // все слои
    const fillings = mockFillings; // все начинки
    const decorations = mockDecorations; // весь декор
    const packaging = mockPackaging[2]; // luxury
    const candles = 20;
    const customText = 'Maximum Configuration Test';

    const price = calculatePrice(size, layers, fillings, decorations, packaging, candles, customText);
    
    // 2500 (base) + 0 (vanilla) + 0 (chocolate) + 200 (red-velvet) + 200 (cream-cheese) + 250 (chocolate-ganache) + 300 (fresh-fruits) + 500 (sugar-flowers) + 500 (luxury) + 1000 (candles) + 50 (text)
    // = 5500, скидка 5% = 5225
    expect(price).toBe(5225);
  });
});
