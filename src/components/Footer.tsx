import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-lg font-semibold mb-4">О компании</h3>
            <p className="text-gray-300 mb-4">
              {/* TODO: заменить текст */}
              Мы создаем уникальные торты на заказ с использованием только натуральных ингредиентов. 
              Каждый торт - это произведение искусства, созданное с любовью.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Меню */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Каталог тортов
                </Link>
              </li>
              <li>
                <Link href="/constructor" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Конструктор тортов
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-pink-400 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Доставка и оплата
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">
                  {/* TODO: заменить телефон */}
                  +7 (999) 123-45-67
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">
                  {/* TODO: заменить email */}
                  info@bb-cake.ru
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-pink-400 mt-1" />
                <span className="text-gray-300">
                  {/* TODO: заменить адрес */}
                  г. Москва, ул. Примерная, д. 123
                </span>
              </div>
            </div>
          </div>

          {/* Время работы */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Время работы</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-pink-400" />
                <div className="text-gray-300">
                  <div>Пн-Пт: 9:00 - 21:00</div>
                  <div>Сб-Вс: 10:00 - 20:00</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Доставка</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• В пределах МКАД - 300₽</div>
                <div>• Экспресс доставка - 500₽</div>
                <div>• Самовывоз - бесплатно</div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} BB Cake. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

