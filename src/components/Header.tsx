import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Л</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Логотип</span>
          </div>

          {/* Основное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Портфолио
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Блог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* Поиск и кнопки */}
          <div className="flex items-center space-x-4">
            {/* Поисковая строка */}
            <div className="hidden lg:flex relative">
              <Input
                type="search"
                placeholder="Поиск..."
                className="w-48 pl-10 pr-4 py-2 bg-gray-50 border-gray-200 focus:border-purple-400 focus:ring-purple-400"
              />
              <Icon
                name="Search"
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* Кнопки входа */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-purple-600"
              >
                Войти
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Регистрация
              </Button>
            </div>

            {/* Мобильное меню */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
