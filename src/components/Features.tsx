import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: "Zap",
      title: "Быстрое развитие",
      description:
        "Ускоряем процессы и повышаем эффективность вашего бизнеса с помощью современных технологий.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      icon: "Shield",
      title: "Надежная защита",
      description:
        "Гарантируем безопасность ваших данных и соответствие всем стандартам качества.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    },
    {
      icon: "Users",
      title: "Команда экспертов",
      description:
        "Профессиональная команда с многолетним опытом готова решить любые задачи.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем комплексные решения, которые помогают бизнесу расти и
            развиваться в современном мире
          </p>
        </div>

        {/* Блоки функций */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
            >
              {/* Текстовая часть */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>

              {/* Изображение */}
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
