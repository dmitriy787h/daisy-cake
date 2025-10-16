export interface CakeOption {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  productionTime?: number; // в часах
  allergens?: string[];
  isAvailable?: boolean;
}

export interface CakeSize {
  id: string;
  name: string;
  diameter: number | string; // в см или диапазон
  servings: number;
  basePrice: number;
  height: number; // в см
}

export interface CakeLayer {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  allergens: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
}

export interface Filling {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  allergens: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
}

export interface Decoration {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'basic' | 'premium' | 'custom';
  isAvailable: boolean;
}

export interface Packaging {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CakeConfiguration {
  size: CakeSize;
  layers: CakeLayer[];
  fillings: Filling[];
  decorations: Decoration[];
  packaging: Packaging;
  candles?: number;
  customText?: string;
  customImage?: string;
}

export const cakeSizes: CakeSize[] = [
  {
    id: 'bento',
    name: 'Бенто',
    diameter: 11,
    servings: 2,
    basePrice: 1499,
    height: 6
  },
  {
    id: '1kg',
    name: '1 кг',
    diameter: 14,
    servings: 6,
    basePrice: 2500,
    height: 8
  },
  {
    id: '1.5kg',
    name: '1,5 кг',
    diameter: '14-16',
    servings: 8,
    basePrice: 3000,
    height: 9
  },
  {
    id: '2kg',
    name: '2 кг',
    diameter: '16-18',
    servings: 10,
    basePrice: 4000,
    height: 10
  },
  {
    id: '2.5kg',
    name: '2,5 кг',
    diameter: '16-18',
    servings: 12,
    basePrice: 5000,
    height: 11
  },
  {
    id: '3kg',
    name: '3 кг',
    diameter: '18-20',
    servings: 14,
    basePrice: 6000,
    height: 12
  },
  {
    id: '3.5kg',
    name: '3,5 кг',
    diameter: '18-20',
    servings: 16,
    basePrice: 7000,
    height: 13
  },
  {
    id: '4kg',
    name: '4 кг',
    diameter: '18-20',
    servings: 18,
    basePrice: 8000,
    height: 14
  }
];

export const cakeLayers: CakeLayer[] = [
  {
    id: 'vanilla',
    name: 'Ванильный бисквит',
    price: 0,
    image: '/assets/cake-layers/vanilla.jpg',
    description: 'Классический ванильный бисквит',
    allergens: ['gluten', 'eggs', 'dairy'],
    isGlutenFree: false,
    isVegan: false
  },
  {
    id: 'chocolate',
    name: 'Шоколадный бисквит',
    price: 0,
    image: '/assets/cake-layers/chocolate.jpg',
    description: 'Насыщенный шоколадный бисквит',
    allergens: ['gluten', 'eggs', 'dairy'],
    isGlutenFree: false,
    isVegan: false
  },
  {
    id: 'red-velvet',
    name: 'Красный бархат',
    price: 200,
    image: '/assets/cake-layers/red-velvet.jpg',
    description: 'Нежный красный бархат',
    allergens: ['gluten', 'eggs', 'dairy'],
    isGlutenFree: false,
    isVegan: false
  },
  {
    id: 'carrot',
    name: 'Морковный торт',
    price: 150,
    image: '/assets/cake-layers/carrot.jpg',
    description: 'Полезный морковный торт',
    allergens: ['gluten', 'eggs', 'dairy', 'nuts'],
    isGlutenFree: false,
    isVegan: false
  },
  {
    id: 'gluten-free',
    name: 'Безглютеновый',
    price: 300,
    image: '/assets/cake-layers/gluten-free.jpg',
    description: 'Безглютеновый бисквит',
    allergens: ['eggs', 'dairy'],
    isGlutenFree: true,
    isVegan: false
  }
];

export const fillings: Filling[] = [
  {
    id: 'cream-cheese',
    name: 'Крем-чиз',
    price: 200,
    image: '/assets/fillings/cream-cheese.jpg',
    description: 'Классический крем-чиз',
    allergens: ['dairy'],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 'chocolate-ganache',
    name: 'Шоколадный ганаш',
    price: 250,
    image: '/assets/fillings/chocolate-ganache.jpg',
    description: 'Насыщенный шоколадный ганаш',
    allergens: ['dairy'],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 'strawberry',
    name: 'Клубничный крем',
    price: 180,
    image: '/assets/fillings/strawberry.jpg',
    description: 'Свежий клубничный крем',
    allergens: ['dairy'],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 'vanilla-buttercream',
    name: 'Ванильный масляный крем',
    price: 150,
    image: '/assets/fillings/vanilla-buttercream.jpg',
    description: 'Нежный ванильный крем',
    allergens: ['dairy'],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 'lemon-curd',
    name: 'Лимонный курд',
    price: 200,
    image: '/assets/fillings/lemon-curd.jpg',
    description: 'Тартовый лимонный курд',
    allergens: ['eggs', 'dairy'],
    isGlutenFree: true,
    isVegan: false
  }
];

export const decorations: Decoration[] = [
  {
    id: 'fresh-fruits',
    name: 'Свежие фрукты',
    price: 300,
    image: '/assets/decorations/fresh-fruits.jpg',
    description: 'Свежие сезонные фрукты',
    category: 'basic',
    isAvailable: true
  },
  {
    id: 'chocolate-chips',
    name: 'Шоколадная крошка',
    price: 150,
    image: '/assets/decorations/chocolate-chips.jpg',
    description: 'Мелкая шоколадная крошка',
    category: 'basic',
    isAvailable: true
  },
  {
    id: 'sugar-flowers',
    name: 'Сахарные цветы',
    price: 500,
    image: '/assets/decorations/sugar-flowers.jpg',
    description: 'Ручная работа - сахарные цветы',
    category: 'premium',
    isAvailable: true
  },
  {
    id: 'macarons',
    name: 'Макаруны',
    price: 400,
    image: '/assets/decorations/macarons.jpg',
    description: 'Цветные макаруны',
    category: 'premium',
    isAvailable: true
  },
  {
    id: 'gold-leaf',
    name: 'Золотая фольга',
    price: 800,
    image: '/assets/decorations/gold-leaf.jpg',
    description: 'Съедобная золотая фольга',
    category: 'premium',
    isAvailable: true
  },
  {
    id: 'custom-photo',
    name: 'Фото на торте',
    price: 600,
    image: '/assets/decorations/custom-photo.jpg',
    description: 'Печать фото на сахарной бумаге',
    category: 'custom',
    isAvailable: true
  }
];

export const packaging: Packaging[] = [
  {
    id: 'standard',
    name: 'Стандартная упаковка',
    price: 0,
    image: '/assets/packaging/standard.jpg',
    description: 'Коробка с логотипом'
  },
  {
    id: 'premium',
    name: 'Подарочная упаковка',
    price: 200,
    image: '/assets/packaging/premium.jpg',
    description: 'Подарочная коробка с лентой'
  },
  {
    id: 'luxury',
    name: 'Люкс упаковка',
    price: 500,
    image: '/assets/packaging/luxury.jpg',
    description: 'Премиум коробка с аксессуарами'
  }
];

export const deliveryOptions = [
  {
    id: 'pickup',
    name: 'Самовывоз',
    price: 0,
    description: 'Забрать из кондитерской'
  },
  {
    id: 'delivery-standard',
    name: 'Стандартная доставка',
    price: 300,
    description: 'Доставка в течение дня'
  },
  {
    id: 'delivery-express',
    name: 'Экспресс доставка',
    price: 500,
    description: 'Доставка в течение 2 часов'
  }
];

