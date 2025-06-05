import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Л</span>
              </div>
              <span className="text-xl font-bold">Логотип</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Мы создаем инновационные решения для современного бизнеса. Наша
              цель — помочь вам достичь новых высот.
            </p>

            {/* Социальные сети */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Icon name="Twitter" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>

          {/* Карта сайта */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Портфолио
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Блог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-gray-400" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-gray-400" />
                <span className="text-gray-400">hello@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-gray-400" />
                <span className="text-gray-400">Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Логотип. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
