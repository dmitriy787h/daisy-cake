import { NextRequest, NextResponse } from 'next/server';

interface Order {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  deliveryAddress?: string;
  deliveryDate: string;
  deliveryTime: string;
  cakeConfiguration: object;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'in_progress' | 'ready' | 'delivered' | 'cancelled';
  createdAt: string;
  notes?: string;
}

// Mock база данных заказов
const orders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Анна Иванова',
    phone: '8 (938) 405-25-90',
    email: 'anna@example.com',
    deliveryAddress: 'г. Сочи, ул. Пластунская, д. 151/5, кв. 45',
    deliveryDate: '2024-01-15',
    deliveryTime: '14:00',
    cakeConfiguration: {
      size: { name: 'Средний', diameter: 20 },
      layers: [{ name: 'Ванильный бисквит' }],
      fillings: [{ name: 'Крем-чиз' }],
      decorations: [{ name: 'Свежие фрукты' }],
      customText: 'С Днем Рождения!'
    },
    totalPrice: 2500,
    status: 'confirmed',
    createdAt: '2024-01-10T10:30:00Z',
    notes: 'Торт нужен к 15:00'
  }
];

// GET - получить все заказы
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: orders
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Ошибка при получении заказов' },
      { status: 500 }
    );
  }
}

// POST - создать новый заказ
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Валидация обязательных полей
    const requiredFields = ['customerName', 'phone', 'deliveryDate', 'deliveryTime', 'cakeConfiguration', 'totalPrice'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Поле ${field} обязательно` },
          { status: 400 }
        );
      }
    }

    // Создание нового заказа
    const newOrder: Order = {
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      customerName: body.customerName,
      phone: body.phone,
      email: body.email,
      deliveryAddress: body.deliveryAddress,
      deliveryDate: body.deliveryDate,
      deliveryTime: body.deliveryTime,
      cakeConfiguration: body.cakeConfiguration,
      totalPrice: body.totalPrice,
      status: 'pending',
      createdAt: new Date().toISOString(),
      notes: body.notes
    };

    orders.push(newOrder);

    return NextResponse.json({
      success: true,
      data: newOrder,
      message: 'Заказ успешно создан'
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Ошибка при создании заказа' },
      { status: 500 }
    );
  }
}
