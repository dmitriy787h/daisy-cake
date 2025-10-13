import { create } from 'zustand';
import { 
  CakeConfiguration, 
  CakeSize, 
  CakeLayer, 
  Filling, 
  Decoration, 
  Packaging,
  cakeSizes,
  cakeLayers,
  fillings,
  decorations,
  packaging
} from '@/data/cakeData';

interface CakeStore {
  // Текущая конфигурация торта
  configuration: CakeConfiguration;
  
  // Доступные опции
  availableSizes: CakeSize[];
  availableLayers: CakeLayer[];
  availableFillings: Filling[];
  availableDecorations: Decoration[];
  availablePackaging: Packaging[];
  
  // Выбранные опции
  selectedSize: CakeSize;
  selectedLayers: CakeLayer[];
  selectedFillings: Filling[];
  selectedDecorations: Decoration[];
  selectedPackaging: Packaging;
  selectedCandles: number | undefined;
  customText: string | undefined;
  customImage: string | undefined;
  
  // Действия
  setSize: (size: CakeSize) => void;
  addLayer: (layer: CakeLayer) => void;
  removeLayer: (layerId: string) => void;
  addFilling: (filling: Filling) => void;
  removeFilling: (fillingId: string) => void;
  addDecoration: (decoration: Decoration) => void;
  removeDecoration: (decorationId: string) => void;
  setPackaging: (packaging: Packaging) => void;
  setCandles: (count: number | undefined) => void;
  setCustomText: (text: string | undefined) => void;
  setCustomImage: (image: string | undefined) => void;
  resetConfiguration: () => void;
  
  // Вычисляемые значения
  getTotalPrice: () => number;
  getConfigurationSummary: () => string;
  validateConfiguration: () => { isValid: boolean; warnings: string[] };
}

const defaultConfiguration: CakeConfiguration = {
  size: cakeSizes[1], // средний по умолчанию
  layers: [cakeLayers[0]], // ванильный бисквит
  fillings: [fillings[0]], // крем-чиз
  decorations: [],
  packaging: packaging[0], // стандартная упаковка
  candles: 0,
  customText: '',
  customImage: undefined
};

export const useCakeStore = create<CakeStore>((set, get) => ({
  // Начальное состояние
  configuration: defaultConfiguration,
  availableSizes: cakeSizes,
  availableLayers: cakeLayers,
  availableFillings: fillings,
  availableDecorations: decorations,
  availablePackaging: packaging,
  
  // Выбранные опции (синхронизированы с configuration)
  selectedSize: defaultConfiguration.size,
  selectedLayers: defaultConfiguration.layers,
  selectedFillings: defaultConfiguration.fillings,
  selectedDecorations: defaultConfiguration.decorations,
  selectedPackaging: defaultConfiguration.packaging,
  selectedCandles: defaultConfiguration.candles,
  customText: defaultConfiguration.customText,
  customImage: defaultConfiguration.customImage,
  
  // Действия
  setSize: (size: CakeSize) => {
    set((state) => ({
      selectedSize: size,
      configuration: {
        ...state.configuration,
        size
      }
    }));
  },
  
  addLayer: (layer: CakeLayer) => {
    set((state) => {
      const newLayers = [...state.selectedLayers, layer];
      return {
        selectedLayers: newLayers,
        configuration: {
          ...state.configuration,
          layers: newLayers
        }
      };
    });
  },
  
  removeLayer: (layerId: string) => {
    set((state) => {
      const newLayers = state.selectedLayers.filter(layer => layer.id !== layerId);
      return {
        selectedLayers: newLayers,
        configuration: {
          ...state.configuration,
          layers: newLayers
        }
      };
    });
  },
  
  addFilling: (filling: Filling) => {
    set((state) => {
      const newFillings = [...state.selectedFillings, filling];
      return {
        selectedFillings: newFillings,
        configuration: {
          ...state.configuration,
          fillings: newFillings
        }
      };
    });
  },
  
  removeFilling: (fillingId: string) => {
    set((state) => {
      const newFillings = state.selectedFillings.filter(filling => filling.id !== fillingId);
      return {
        selectedFillings: newFillings,
        configuration: {
          ...state.configuration,
          fillings: newFillings
        }
      };
    });
  },
  
  addDecoration: (decoration: Decoration) => {
    set((state) => {
      const newDecorations = [...state.selectedDecorations, decoration];
      return {
        selectedDecorations: newDecorations,
        configuration: {
          ...state.configuration,
          decorations: newDecorations
        }
      };
    });
  },
  
  removeDecoration: (decorationId: string) => {
    set((state) => {
      const newDecorations = state.selectedDecorations.filter(decoration => decoration.id !== decorationId);
      return {
        selectedDecorations: newDecorations,
        configuration: {
          ...state.configuration,
          decorations: newDecorations
        }
      };
    });
  },
  
  setPackaging: (packaging: Packaging) => {
    set((state) => ({
      selectedPackaging: packaging,
      configuration: {
        ...state.configuration,
        packaging
      }
    }));
  },
  
  setCandles: (count: number | undefined) => {
    set((state) => ({
      selectedCandles: count,
      configuration: {
        ...state.configuration,
        candles: count
      }
    }));
  },
  
  setCustomText: (text: string | undefined) => {
    set((state) => ({
      customText: text,
      configuration: {
        ...state.configuration,
        customText: text
      }
    }));
  },
  
  setCustomImage: (image: string | undefined) => {
    set((state) => ({
      customImage: image,
      configuration: {
        ...state.configuration,
        customImage: image
      }
    }));
  },
  
  resetConfiguration: () => {
    set({
      configuration: defaultConfiguration,
      selectedSize: defaultConfiguration.size,
      selectedLayers: defaultConfiguration.layers,
      selectedFillings: defaultConfiguration.fillings,
      selectedDecorations: defaultConfiguration.decorations,
      selectedPackaging: defaultConfiguration.packaging,
      selectedCandles: defaultConfiguration.candles,
      customText: defaultConfiguration.customText,
      customImage: defaultConfiguration.customImage
    });
  },
  
  // Вычисляемые значения
  getTotalPrice: () => {
    const state = get();
    let total = state.selectedSize.basePrice;
    
    // Добавляем стоимость слоев
    state.selectedLayers.forEach(layer => {
      total += layer.price;
    });
    
    // Добавляем стоимость начинок
    state.selectedFillings.forEach(filling => {
      total += filling.price;
    });
    
    // Добавляем стоимость декора
    state.selectedDecorations.forEach(decoration => {
      total += decoration.price;
    });
    
    // Добавляем стоимость упаковки
    total += state.selectedPackaging.price;
    
    // Добавляем стоимость свечей
    total += (state.selectedCandles || 0) * 50;
    
    // Добавляем стоимость персонального текста
    if (state.customText) {
      total += 50;
    }
    
    // Применяем скидку за большой заказ
    if (total > 5000) {
      total = Math.floor(total * 0.95);
    }
    
    return total;
  },
  
  getConfigurationSummary: () => {
    const state = get();
    return `Торт: ${state.selectedSize.name}, ${state.selectedLayers.length} слоев, ${state.selectedFillings.length} начинок, ${state.selectedDecorations.length} декора`;
  },
  
  validateConfiguration: () => {
    const state = get();
    const warnings: string[] = [];
    
    // Проверяем минимальные требования
    if (state.selectedLayers.length === 0) {
      warnings.push('Выберите хотя бы один слой торта');
    }
    
    if (state.selectedFillings.length === 0) {
      warnings.push('Выберите хотя бы одну начинку');
    }
    
    // Проверяем совместимость
    const hasGlutenFreeLayer = state.selectedLayers.some(layer => layer.isGlutenFree);
    const hasNonGlutenFreeFilling = state.selectedFillings.some(filling => !filling.isGlutenFree);
    
    if (hasGlutenFreeLayer && hasNonGlutenFreeFilling) {
      warnings.push('Безглютеновые слои лучше сочетаются с безглютеновыми начинками');
    }
    
    return {
      isValid: warnings.length === 0,
      warnings
    };
  }
}));