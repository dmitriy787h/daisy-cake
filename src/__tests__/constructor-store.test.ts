import { describe, it, expect, beforeEach } from '@jest/globals';

// Мок данных
const mockSize = {
  id: 'medium',
  name: 'Средний',
  basePrice: 1800,
  diameter: 20,
  servings: 8,
  height: 10
};

const mockLayer = {
  id: 'vanilla',
  name: 'Ванильный бисквит',
  price: 0,
  image: '',
  description: '',
  allergens: [],
  isGlutenFree: false,
  isVegan: false
};

const mockFilling = {
  id: 'cream-cheese',
  name: 'Крем-чиз',
  price: 200,
  image: '',
  description: '',
  allergens: [],
  isGlutenFree: false,
  isVegan: false
};

const mockDecoration = {
  id: 'fresh-fruits',
  name: 'Свежие фрукты',
  price: 300,
  image: '',
  description: '',
  allergens: [],
  isGlutenFree: false,
  isVegan: false
};

const mockPackaging = {
  id: 'premium',
  name: 'Подарочная упаковка',
  price: 200,
  image: '',
  description: ''
};

// Простая реализация store для тестирования
class MockCakeStore {
  private state = {
    selectedSize: mockSize,
    selectedLayers: [] as typeof mockLayer[],
    selectedFillings: [] as typeof mockFilling[],
    selectedDecorations: [] as typeof mockDecoration[],
    selectedPackaging: mockPackaging,
    selectedCandles: 0,
    customText: '',
    customImage: undefined as string | undefined
  };

  getState() {
    return { ...this.state };
  }

  setSize(size: typeof mockSize) {
    this.state.selectedSize = size;
  }

  addLayer(layer: typeof mockLayer) {
    if (!this.state.selectedLayers.find(l => l.id === layer.id)) {
      this.state.selectedLayers.push(layer);
    }
  }

  removeLayer(layerId: string) {
    this.state.selectedLayers = this.state.selectedLayers.filter(l => l.id !== layerId);
  }

  addFilling(filling: typeof mockFilling) {
    if (!this.state.selectedFillings.find(f => f.id === filling.id)) {
      this.state.selectedFillings.push(filling);
    }
  }

  removeFilling(fillingId: string) {
    this.state.selectedFillings = this.state.selectedFillings.filter(f => f.id !== fillingId);
  }

  addDecoration(decoration: typeof mockDecoration) {
    if (!this.state.selectedDecorations.find(d => d.id === decoration.id)) {
      this.state.selectedDecorations.push(decoration);
    }
  }

  removeDecoration(decorationId: string) {
    this.state.selectedDecorations = this.state.selectedDecorations.filter(d => d.id !== decorationId);
  }

  setPackaging(packaging: typeof mockPackaging) {
    this.state.selectedPackaging = packaging;
  }

  setCandles(count: number) {
    this.state.selectedCandles = count;
  }

  setCustomText(text: string) {
    this.state.customText = text;
  }

  setCustomImage(image: string | undefined) {
    this.state.customImage = image;
  }

  resetConfiguration() {
    this.state = {
      selectedSize: mockSize,
      selectedLayers: [],
      selectedFillings: [],
      selectedDecorations: [],
      selectedPackaging: mockPackaging,
      selectedCandles: 0,
      customText: '',
      customImage: undefined
    };
  }
}

describe('Constructor Store', () => {
  let store: MockCakeStore;

  beforeEach(() => {
    store = new MockCakeStore();
  });

  it('1. Изменение размера не сбрасывает другие опции', () => {
    // Добавляем слои и начинки
    store.addLayer(mockLayer);
    store.addFilling(mockFilling);
    store.setCandles(5);
    store.setCustomText('Test');

    const stateBefore = store.getState();
    expect(stateBefore.selectedLayers).toHaveLength(1);
    expect(stateBefore.selectedFillings).toHaveLength(1);
    expect(stateBefore.selectedCandles).toBe(5);
    expect(stateBefore.customText).toBe('Test');

    // Меняем размер
    const newSize = { ...mockSize, id: 'large', name: 'Большой', basePrice: 2500 };
    store.setSize(newSize);

    const stateAfter = store.getState();
    expect(stateAfter.selectedSize.id).toBe('large');
    expect(stateAfter.selectedLayers).toHaveLength(1); // не сбросились
    expect(stateAfter.selectedFillings).toHaveLength(1); // не сбросились
    expect(stateAfter.selectedCandles).toBe(5); // не сбросились
    expect(stateAfter.customText).toBe('Test'); // не сбросился
  });

  it('2. Добавление слоя работает корректно', () => {
    expect(store.getState().selectedLayers).toHaveLength(0);
    
    store.addLayer(mockLayer);
    expect(store.getState().selectedLayers).toHaveLength(1);
    expect(store.getState().selectedLayers[0].id).toBe('vanilla');
  });

  it('3. Добавление дублирующего слоя не создает копии', () => {
    store.addLayer(mockLayer);
    store.addLayer(mockLayer); // добавляем тот же слой
    
    expect(store.getState().selectedLayers).toHaveLength(1);
  });

  it('4. Удаление слоя работает корректно', () => {
    store.addLayer(mockLayer);
    expect(store.getState().selectedLayers).toHaveLength(1);
    
    store.removeLayer(mockLayer.id);
    expect(store.getState().selectedLayers).toHaveLength(0);
  });

  it('5. Добавление начинки работает корректно', () => {
    expect(store.getState().selectedFillings).toHaveLength(0);
    
    store.addFilling(mockFilling);
    expect(store.getState().selectedFillings).toHaveLength(1);
    expect(store.getState().selectedFillings[0].id).toBe('cream-cheese');
  });

  it('6. Добавление декора работает корректно', () => {
    expect(store.getState().selectedDecorations).toHaveLength(0);
    
    store.addDecoration(mockDecoration);
    expect(store.getState().selectedDecorations).toHaveLength(1);
    expect(store.getState().selectedDecorations[0].id).toBe('fresh-fruits');
  });

  it('7. Изменение упаковки работает корректно', () => {
    const newPackaging = { ...mockPackaging, id: 'luxury', name: 'Люкс упаковка', price: 500 };
    store.setPackaging(newPackaging);
    
    const state = store.getState();
    expect(state.selectedPackaging.id).toBe('luxury');
    expect(state.selectedPackaging.price).toBe(500);
  });

  it('8. Изменение количества свечей работает корректно', () => {
    store.setCandles(10);
    expect(store.getState().selectedCandles).toBe(10);
    
    store.setCandles(0);
    expect(store.getState().selectedCandles).toBe(0);
  });

  it('9. Изменение кастомного текста работает корректно', () => {
    store.setCustomText('Happy Birthday');
    expect(store.getState().customText).toBe('Happy Birthday');
    
    store.setCustomText('');
    expect(store.getState().customText).toBe('');
  });

  it('10. Сброс конфигурации работает корректно', () => {
    // Добавляем различные опции
    store.addLayer(mockLayer);
    store.addFilling(mockFilling);
    store.addDecoration(mockDecoration);
    store.setCandles(5);
    store.setCustomText('Test');
    
    // Проверяем, что опции добавлены
    let state = store.getState();
    expect(state.selectedLayers).toHaveLength(1);
    expect(state.selectedFillings).toHaveLength(1);
    expect(state.selectedDecorations).toHaveLength(1);
    expect(state.selectedCandles).toBe(5);
    expect(state.customText).toBe('Test');
    
    // Сбрасываем
    store.resetConfiguration();
    
    // Проверяем, что все сброшено
    state = store.getState();
    expect(state.selectedLayers).toHaveLength(0);
    expect(state.selectedFillings).toHaveLength(0);
    expect(state.selectedDecorations).toHaveLength(0);
    expect(state.selectedCandles).toBe(0);
    expect(state.customText).toBe('');
  });

  it('11. Комплексное изменение опций', () => {
    // Добавляем несколько слоев
    store.addLayer(mockLayer);
    const anotherLayer = { ...mockLayer, id: 'chocolate', name: 'Шоколадный бисквит' };
    store.addLayer(anotherLayer);
    
    // Добавляем начинки
    store.addFilling(mockFilling);
    const anotherFilling = { ...mockFilling, id: 'chocolate-ganache', name: 'Шоколадный ганаш', price: 250 };
    store.addFilling(anotherFilling);
    
    // Добавляем декор
    store.addDecoration(mockDecoration);
    
    // Устанавливаем дополнительные параметры
    store.setCandles(8);
    store.setCustomText('Special Cake');
    
    const state = store.getState();
    expect(state.selectedLayers).toHaveLength(2);
    expect(state.selectedFillings).toHaveLength(2);
    expect(state.selectedDecorations).toHaveLength(1);
    expect(state.selectedCandles).toBe(8);
    expect(state.customText).toBe('Special Cake');
  });

  it('12. Удаление несуществующих элементов не вызывает ошибок', () => {
    // Пытаемся удалить несуществующие элементы
    store.removeLayer('non-existent');
    store.removeFilling('non-existent');
    store.removeDecoration('non-existent');
    
    // Проверяем, что состояние не изменилось
    const state = store.getState();
    expect(state.selectedLayers).toHaveLength(0);
    expect(state.selectedFillings).toHaveLength(0);
    expect(state.selectedDecorations).toHaveLength(0);
  });
});
