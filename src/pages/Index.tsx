import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const instruments = [
    {
      name: "Гитара",
      icon: "Music",
      description: "Акустическая и электрогитара для детей и подростков",
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Синтезатор",
      icon: "Piano",
      description: "Обучение игре на клавишных инструментах",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Барабаны",
      icon: "Drum",
      description: "Ударные инструменты и ритм",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Вокал",
      icon: "Mic",
      description: "Постановка голоса и вокальная техника",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "Скрипка",
      icon: "Music2",
      description: "Классическая скрипка для начинающих",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Укулеле",
      icon: "Guitar",
      description: "Гавайская гитара для самых маленьких",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const prices = [
    {
      title: "Пробное занятие",
      price: "Бесплатно",
      features: ["30 минут", "Знакомство с инструментом", "Консультация педагога"],
      popular: false,
    },
    {
      title: "Индивидуальные",
      price: "2500₽",
      period: "/занятие",
      features: ["45 минут", "Персональная программа", "Гибкое расписание", "Выбор инструмента"],
      popular: true,
    },
    {
      title: "Групповые",
      price: "1500₽",
      period: "/занятие",
      features: ["60 минут", "Группы 4-6 человек", "Социализация", "Игра в ансамбле"],
      popular: false,
    },
    {
      title: "Абонемент",
      price: "8000₽",
      period: "/месяц",
      features: ["8 занятий", "Скидка 20%", "Перенос занятий", "Доступ к репетициям"],
      popular: false,
    },
  ];

  const schedule = [
    { day: "Понедельник", time: "15:00 - 20:00", slots: "Свободно 3 места" },
    { day: "Вторник", time: "15:00 - 20:00", slots: "Свободно 5 мест" },
    { day: "Среда", time: "15:00 - 20:00", slots: "Свободно 2 места" },
    { day: "Четверг", time: "15:00 - 20:00", slots: "Свободно 4 места" },
    { day: "Пятница", time: "15:00 - 20:00", slots: "Свободно 6 мест" },
    { day: "Суббота", time: "10:00 - 18:00", slots: "Свободно 8 мест" },
    { day: "Воскресенье", time: "10:00 - 16:00", slots: "Свободно 4 места" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Music" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">МузШкола</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#instruments" className="hover:text-primary transition-colors">Инструменты</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-purple-100 text-primary border-0">🎵 Музыкальная школа для детей</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Открой мир музыки вместе с нами!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Обучение игре на гитаре, синтезаторе и других музыкальных инструментах для детей от 5 лет
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить нам
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Преподавателей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Лет работы</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-orange-400 p-1">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                  <div className="text-9xl">🎸</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-4 shadow-lg animate-pulse">
                <Icon name="Star" className="text-white" size={32} />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-400 rounded-full p-4 shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
                <Icon name="Music" className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="instruments" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-600 border-0">🎹 Наши программы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Музыкальные инструменты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите инструмент, который зажжёт искру творчества в вашем ребёнке
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((instrument, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl ${instrument.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={instrument.icon as any} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{instrument.name}</h3>
                  <p className="text-muted-foreground">{instrument.description}</p>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    Подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-600 border-0">💰 Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены на обучение</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гибкие условия для каждого ученика. Первое занятие — бесплатно!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {prices.map((price, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  price.popular ? 'border-primary border-2 shadow-lg scale-105' : 'border-2'
                }`}
              >
                {price.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                    ⭐ Популярно
                  </Badge>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{price.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{price.price}</span>
                    {price.period && <span className="text-muted-foreground">{price.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      price.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-600 border-0">📅 График работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание</h2>
            <p className="text-xl text-muted-foreground">
              Выберите удобное время для занятий
            </p>
          </div>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-orange-400 rounded-xl flex items-center justify-center text-white font-bold">
                        {item.day.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{item.day}</div>
                        <div className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          {item.time}
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <Icon name="Users" size={16} className="mr-1" />
                      {item.slots}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-600 border-0">📞 Связь</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-4">Звоните нам в рабочее время</p>
                <a href="tel:+79991234567" className="text-xl font-semibold text-primary hover:underline">
                  +7 (999) 123-45-67
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Напишите нам письмо</p>
                <a href="mailto:info@muzschool.ru" className="text-xl font-semibold text-primary hover:underline">
                  info@muzschool.ru
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground mb-4">Приходите к нам в гости</p>
                <p className="text-lg font-semibold">
                  г. Москва, ул. Музыкальная, д. 15
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="text-orange-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Соцсети</h3>
                <p className="text-muted-foreground mb-4">Следите за нашими новостями</p>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-600 to-orange-500 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Music" size={32} />
            <span className="text-2xl font-bold">МузШкола</span>
          </div>
          <p className="text-white/80 mb-6">
            Развиваем музыкальные таланты с 2015 года
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#instruments" className="hover:text-white/80 transition-colors">Инструменты</a>
            <a href="#prices" className="hover:text-white/80 transition-colors">Цены</a>
            <a href="#schedule" className="hover:text-white/80 transition-colors">Расписание</a>
            <a href="#contacts" className="hover:text-white/80 transition-colors">Контакты</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-white/60">
              © 2024 МузШкола. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
