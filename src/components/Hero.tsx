import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white via-purple-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Главный заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Создаем
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {" "}
              будущее{" "}
            </span>
            вместе
          </h1>

          {/* Краткое описание */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Инновационные решения для современного бизнеса. Мы помогаем
            компаниям расти и достигать новых высот.
          </p>

          {/* Кнопки призыва к действию */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium group"
            >
              Начать сейчас
              <Icon
                name="ArrowRight"
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-medium"
            >
              Узнать больше
            </Button>
          </div>

          {/* Визуальный элемент */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="Sparkles"
                    size={48}
                    className="text-purple-600 mx-auto mb-4"
                  />
                  <p className="text-gray-600 font-medium">Ваш проект здесь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
