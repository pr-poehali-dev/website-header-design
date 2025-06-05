import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип школы */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Школа №1</h1>
              <p className="text-xs text-gray-600">Образование будущего</p>
            </div>
          </div>

          {/* Основное меню */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Расписание
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Оценки
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Домашнее задание
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Библиотека
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* Поиск и кнопки входа */}
          <div className="flex items-center space-x-4">
            {/* Поисковая строка */}
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Поиск по сайту..."
                className="w-48 pl-10 pr-4 py-2 bg-gray-50 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
              />
              <Icon
                name="Search"
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* Кнопка входа */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>

            {/* Мобильное меню */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
