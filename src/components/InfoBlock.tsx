import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const InfoBlock = () => {
  const news = [
    {
      title: "Начало учебного года",
      date: "1 сентября 2025",
      content: "Торжественная линейка состоится в 9:00 на школьном дворе",
    },
    {
      title: "Родительское собрание",
      date: "15 сентября 2025",
      content: "Собрание для родителей 5-х классов в актовом зале",
    },
    {
      title: "Школьная олимпиада",
      date: "20 сентября 2025",
      content: "Математическая олимпиада для учащихся 8-11 классов",
    },
  ];

  const announcements = [
    "⚠️ Изменение в расписании: урок физики в 9А переносится на 14:00",
    "📚 Новые учебники по английскому языку доступны в библиотеке",
    "🏆 Поздравляем команду школы с победой в городском конкурсе!",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Приветственное сообщение */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Добро пожаловать в{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Школу №1
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современное образование для успешного будущего. Мы создаем условия
            для развития каждого ученика.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Новости школы */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-6">
                <Icon
                  name="Newspaper"
                  size={24}
                  className="text-blue-600 mr-3"
                />
                <h2 className="text-2xl font-bold text-gray-900">
                  Новости школы
                </h2>
              </div>
              <div className="space-y-6">
                {news.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="mt-6 w-full border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                Все новости
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Важные объявления и календарь */}
          <div className="space-y-8">
            {/* Важные объявления */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <Icon name="Bell" size={20} className="text-orange-500 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Объявления</h3>
              </div>
              <div className="space-y-3">
                {announcements.map((announcement, index) => (
                  <div
                    key={index}
                    className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg"
                  >
                    {announcement}
                  </div>
                ))}
              </div>
            </div>

            {/* Календарь событий */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <Icon
                  name="Calendar"
                  size={20}
                  className="text-green-500 mr-2"
                />
                <h3 className="text-lg font-bold text-gray-900">Календарь</h3>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">5</div>
                <div className="text-sm text-gray-600 mb-4">Июня 2025</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Экзамен по математике</span>
                    <span className="text-blue-600">9:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Собрание учителей</span>
                    <span className="text-blue-600">15:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
