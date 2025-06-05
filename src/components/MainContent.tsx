import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const MainContent = () => {
  const sections = [
    {
      title: "Инновационные решения",
      description:
        "Разрабатываем современные технологические решения для вашего бизнеса. Автоматизируем процессы и повышаем эффективность работы.",
      icon: "Lightbulb",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      isReversed: false,
    },
    {
      title: "Экспертная поддержка",
      description:
        "Команда профессионалов с многолетним опытом готова помочь на каждом этапе. Консультации, внедрение и техническая поддержка.",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      isReversed: true,
    },
    {
      title: "Результаты и рост",
      description:
        "Измеримые результаты и устойчивый рост вашего бизнеса. Аналитика, оптимизация и постоянное совершенствование процессов.",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      isReversed: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${section.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
            >
              {/* Текстовая часть */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
                  <Icon
                    name={section.icon as any}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {section.description}
                </p>
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Узнать больше
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>

              {/* Изображение */}
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainContent;
