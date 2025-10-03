import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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
  selectedCandles: number;
  customText: string;
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
  setCandles: (count: number) => void;
  setCustomText: (text: string) => void;
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

export const useCakeStore = create<CakeStore>()(
  persist(
    (set, get) => ({
      // Начальное состояние
      configuration: defaultConfiguration,
      availableSizes: cakeSizes,
      availableLayers: cakeLayers,
      availableFillings: fillings,
      availableDecorations: decorations,
      availablePackaging: packaging,
      
      selectedSize: cakeSizes[1],
      selectedLayers: [cakeLayers[0]],
      selectedFillings: [fillings[0]],
      selectedDecorations: [],
      selectedPackaging: packaging[0],
      selectedCandles: 0,
      customText: '',
      customImage: undefined,
      
      // Действия
      setSize: (size) => set({ selectedSize: size }),
      
      addLayer: (layer) => set((state) => ({
        selectedLayers: [...state.selectedLayers, layer]
      })),
      
      removeLayer: (layerId) => set((state) => ({
        selectedLayers: state.selectedLayers.filter(layer => layer.id !== layerId)
      })),
      
      addFilling: (filling) => set((state) => ({
        selectedFillings: [...state.selectedFillings, filling]
      })),
      
      removeFilling: (fillingId) => set((state) => ({
        selectedFillings: state.selectedFillings.filter(filling => filling.id !== fillingId)
      })),
      
      addDecoration: (decoration) => set((state) => ({
        selectedDecorations: [...state.selectedDecorations, decoration]
      })),
      
      removeDecoration: (decorationId) => set((state) => ({
        selectedDecorations: state.selectedDecorations.filter(decoration => decoration.id !== decorationId)
      })),
      
      setPackaging: (packaging) => set({ selectedPackaging: packaging }),
      setCandles: (count) => set({ selectedCandles: count }),
      setCustomText: (text) => set({ customText: text }),
      setCustomImage: (image) => set({ customImage: image }),
      
      resetConfiguration: () => set({
        selectedSize: cakeSizes[1],
        selectedLayers: [cakeLayers[0]],
        selectedFillings: [fillings[0]],
        selectedDecorations: [],
        selectedPackaging: packaging[0],
        selectedCandles: 0,
        customText: '',
        customImage: undefined
      }),
      
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
        
        // Добавляем стоимость свечей (50 руб за свечу)
        total += state.selectedCandles * 50;
        
        return total;
      },
      
      getConfigurationSummary: () => {
        const state = get();
        const parts = [];
        
        parts.push(`Размер: ${state.selectedSize.name}`);
        parts.push(`Слои: ${state.selectedLayers.map(l => l.name).join(', ')}`);
        parts.push(`Начинки: ${state.selectedFillings.map(f => f.name).join(', ')}`);
        
        if (state.selectedDecorations.length > 0) {
          parts.push(`Декор: ${state.selectedDecorations.map(d => d.name).join(', ')}`);
        }
        
        if (state.selectedCandles > 0) {
          parts.push(`Свечи: ${state.selectedCandles} шт.`);
        }
        
        if (state.customText) {
          parts.push(`Текст: "${state.customText}"`);
        }
        
        return parts.join(' | ');
      },
      
      validateConfiguration: () => {
        const state = get();
        const warnings: string[] = [];
        
        // Проверяем совместимость безглютенового коржа с начинками
        const hasGlutenFreeLayer = state.selectedLayers.some(layer => layer.isGlutenFree);
        const hasNonGlutenFreeFilling = state.selectedFillings.some(filling => !filling.isGlutenFree);
        
        if (hasGlutenFreeLayer && hasNonGlutenFreeFilling) {
          warnings.push('Внимание: выбран безглютеновый корж, но некоторые начинки могут содержать глютен');
        }
        
        // Проверяем количество слоев
        if (state.selectedLayers.length > 3) {
          warnings.push('Рекомендуется не более 3 слоев для лучшего вкуса');
        }
        
        // Проверяем количество начинок
        if (state.selectedFillings.length > 2) {
          warnings.push('Рекомендуется не более 2 видов начинки для сбалансированного вкуса');
        }
        
        return {
          isValid: warnings.length === 0,
          warnings
        };
      }
    }),
    {
      name: 'cake-configuration',
      partialize: (state) => ({
        selectedSize: state.selectedSize,
        selectedLayers: state.selectedLayers,
        selectedFillings: state.selectedFillings,
        selectedDecorations: state.selectedDecorations,
        selectedPackaging: state.selectedPackaging,
        selectedCandles: state.selectedCandles,
        customText: state.customText,
        customImage: state.customImage
      })
    }
  )
);

