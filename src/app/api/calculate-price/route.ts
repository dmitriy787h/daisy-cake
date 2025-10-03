import { NextRequest, NextResponse } from 'next/server';

interface PriceCalculationRequest {
  size: {
    id: string;
    basePrice: number;
  };
  layers: Array<{
    id: string;
    price: number;
  }>;
  fillings: Array<{
    id: string;
    price: number;
  }>;
  decorations: Array<{
    id: string;
    price: number;
  }>;
  packaging: {
    id: string;
    price: number;
  };
  candles: number;
  deliveryType: 'pickup' | 'delivery-standard' | 'delivery-express';
}

interface PriceBreakdown {
  basePrice: number;
  layersPrice: number;
  fillingsPrice: number;
  decorationsPrice: number;
  packagingPrice: number;
  candlesPrice: number;
  deliveryPrice: number;
  subtotal: number;
  discount: number;
  total: number;
}

const deliveryPrices = {
  'pickup': 0,
  'delivery-standard': 300,
  'delivery-express': 500
};

export async function POST(request: NextRequest) {
  try {
    const body: PriceCalculationRequest = await request.json();
    
    // Валидация входных данных
    if (!body.size || !body.layers || !body.fillings || !body.decorations || !body.packaging) {
      return NextResponse.json(
        { success: false, error: 'Неполные данные для расчета стоимости' },
        { status: 400 }
      );
    }

    // Расчет базовой стоимости
    const basePrice = body.size.basePrice;
    
    // Расчет стоимости слоев
    const layersPrice = body.layers.reduce((sum, layer) => sum + layer.price, 0);
    
    // Расчет стоимости начинок
    const fillingsPrice = body.fillings.reduce((sum, filling) => sum + filling.price, 0);
    
    // Расчет стоимости декора
    const decorationsPrice = body.decorations.reduce((sum, decoration) => sum + decoration.price, 0);
    
    // Расчет стоимости упаковки
    const packagingPrice = body.packaging.price;
    
    // Расчет стоимости свечей (50 руб за свечу)
    const candlesPrice = body.candles * 50;
    
    // Расчет стоимости доставки
    const deliveryPrice = deliveryPrices[body.deliveryType] || 0;
    
    // Промежуточная сумма
    const subtotal = basePrice + layersPrice + fillingsPrice + decorationsPrice + packagingPrice + candlesPrice + deliveryPrice;
    
    // Применение скидок
    let discount = 0;
    
    // Скидка за большой заказ (свыше 5000 руб - 5%)
    if (subtotal > 5000) {
      discount = Math.floor(subtotal * 0.05);
    }
    
    // Скидка за экспресс-доставку (если выбрана) - 10% скидка на торт
    if (body.deliveryType === 'delivery-express') {
      const cakeDiscount = Math.floor((basePrice + layersPrice + fillingsPrice + decorationsPrice + packagingPrice + candlesPrice) * 0.1);
      discount += cakeDiscount;
    }
    
    // Итоговая сумма
    const total = Math.max(0, subtotal - discount);
    
    const breakdown: PriceBreakdown = {
      basePrice,
      layersPrice,
      fillingsPrice,
      decorationsPrice,
      packagingPrice,
      candlesPrice,
      deliveryPrice,
      subtotal,
      discount,
      total
    };

    return NextResponse.json({
      success: true,
      data: breakdown
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Ошибка при расчете стоимости' },
      { status: 500 }
    );
  }
}
