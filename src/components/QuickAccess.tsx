import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const QuickAccess = () => {
  const accessCards = [
    {
      role: "Ученик",
      icon: "User",
      description: "Дневник, оценки, домашние задания",
      bgColor: "from-blue-500 to-blue-600",
      features: [
        "Электронный дневник",
        "Расписание уроков",
        "Домашние задания",
        "Библиотека",
      ],
    },
    {
      role: "Родитель",
      icon: "Users",
      description: "Успеваемость ребенка, общение с учителями",
      bgColor: "from-green-500 to-green-600",
      features: [
        "Оценки ребенка",
        "Посещаемость",
        "Общение с учителями",
        "Оплата питания",
      ],
    },
    {
      role: "Учитель",
      icon: "BookOpen",
      description: "Ведение журнала, планирование уроков",
      bgColor: "from-purple-500 to-purple-600",
      features: [
        "Электронный журнал",
        "Планы уроков",
        "Методические материалы",
        "Аналитика",
      ],
    },
    {
      role: "Администрация",
      icon: "Settings",
      description: "Управление школой, отчеты, аналитика",
      bgColor: "from-orange-500 to-orange-600",
      features: ["База данных", "Расписание", "Отчеты", "Управление системой"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Быстрый доступ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите свою роль для входа в личный кабинет
          </p>
        </div>

        {/* Карточки ролей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessCards.map((card, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Иконка роли */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${card.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={card.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                {/* Информация о роли */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.role}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Список функций */}
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Кнопка входа */}
                <Button
                  className={`w-full bg-gradient-to-r ${card.bgColor} hover:opacity-90 text-white`}
                >
                  Войти как {card.role.toLowerCase()}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <Icon
              name="HelpCircle"
              size={32}
              className="text-blue-600 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Нужна помощь?
            </h3>
            <p className="text-gray-600 mb-6">
              Если у вас возникли проблемы с входом в систему или вы забыли
              пароль, обратитесь к администратору школы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить: +7 (123) 456-78-90
              </Button>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                admin@school1.edu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
