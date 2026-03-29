import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, Wifi, Coffee, Car, Clock, Heart, ChevronUp, Menu, X, Check, Home, Users, Shield, Sparkles, Camera } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rooms = [
    {
      name: 'Стандартный номер',
      price: '15 000',
      image: 'bursa-hotel-room-standard-cozy',
      features: ['Wi-Fi', 'Завтрак', 'Кондиционер', 'Телевизор']
    },
    {
      name: 'Комфорт номер',
      price: '20 000',
      image: 'bursa-hotel-room-comfort-modern',
      features: ['Wi-Fi', 'Завтрак', 'Мини-бар', 'Рабочий стол']
    },
    {
      name: 'Люкс номер',
      price: '30 000',
      image: 'bursa-hotel-room-luxury-elegant',
      features: ['Wi-Fi', 'Завтрак', 'Гостиная', 'Джакузи']
    }
  ];

  const reviews = [
    {
      name: 'Айнур К.',
      rating: 5,
      text: 'Прекрасный отель с очень уютной атмосферой. Персонал замечательный, всегда готовы помочь. Номера чистые и комфортные. Обязательно вернусь снова!',
      date: 'март 2024'
    },
    {
      name: 'Дмитрий П.',
      rating: 5,
      text: 'Отличное расположение, красивый интерьер. Завтраки очень вкусные, большой выбор. Особая благодарность администраторам за профессионализм.',
      date: 'февраль 2024'
    },
    {
      name: 'Гульнара С.',
      rating: 5,
      text: 'Останавливалась с семьей. Все очень понравилось! Дети были в восторге. Чистота, уют, внимание к деталям. Рекомендую всем!',
      date: 'январь 2024'
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'Wi-Fi' },
    { icon: Coffee, name: 'Завтрак' },
    { icon: Car, name: 'Парковка' },
    { icon: Clock, name: '24/7 Ресепшн' },
    { icon: Heart, name: 'Прачечная' },
    { icon: Shield, name: 'Сейф' },
    { icon: Users, name: 'Конференц-зал' },
    { icon: Sparkles, name: 'Уборка номеров' }
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <h1 className="font-playfair text-2xl font-bold">Bursa</h1>
              <p className="text-sm opacity-90">Гостиница в Таразе</p>
            </div>
            
            <div className="hidden sm:flex items-center space-x-6 lg:space-x-8">
              <a href="#about" className="text-white hover:text-accent transition-colors">О нас</a>
              <a href="#rooms" className="text-white hover:text-accent transition-colors">Номера</a>
              <a href="#amenities" className="text-white hover:text-accent transition-colors">Услуги</a>
              <a href="#reviews" className="text-white hover:text-accent transition-colors">Отзывы</a>
              <a href="#contacts" className="text-white hover:text-accent transition-colors">Контакты</a>
            </div>

            <a 
              href="https://wa.me/77751146760"
              className="bg-accent hover:bg-accent/90 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-colors text-sm sm:text-base"
            >
              Бронировать
            </a>

            <button 
              className="sm:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden mt-4 pb-4">
              <a href="#about" className="block text-white hover:text-accent transition-colors py-2">О нас</a>
              <a href="#rooms" className="block text-white hover:text-accent transition-colors py-2">Номера</a>
              <a href="#amenities" className="block text-white hover:text-accent transition-colors py-2">Услуги</a>
              <a href="#reviews" className="block text-white hover:text-accent transition-colors py-2">Отзывы</a>
              <a href="#contacts" className="block text-white hover:text-accent transition-colors py-2">Контакты</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/bursa-hotel-facade-luxury/1920/1080" 
            alt="Bursa Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Bursa Hotel
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Идеальный выбор для тех, кто ценит комфорт, уют и высокий сервис
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/77751146760"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Забронировать сейчас
            </a>
            <a 
              href="#rooms"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Смотреть номера
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center space-x-1 mb-3">
                <Star className="fill-current text-yellow-400" size={24} />
                <Star className="fill-current text-yellow-400" size={24} />
                <Star className="fill-current text-yellow-400" size={24} />
                <Star className="fill-current text-yellow-400" size={24} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">4.9 / 5.0</p>
              <p className="text-base text-white/90 font-medium">Рейтинг гостей</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-white mb-1">335</p>
              <p className="text-base text-white/90 font-medium">Отзывов на 2ГИС</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-white mb-1">4 ⭐</p>
              <p className="text-base text-white/90 font-medium">Категория отеля</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Добро пожаловать в Bursa
              </h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                Мы — уютный бутик-отель в сердце Тараза, где каждый гость чувствует себя как дома. 
                Наша команда создала атмосферу тепла и гостеприимства, сочетая казахские традиции 
                с современным комфортом.
              </p>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                С 2019 года мы радуем гостей своим сервисом, вниманием к деталям и индивидуальным подходом. 
                В Bursa вы найдете не просто место для ночлега, а настоящий дом вдали от дома.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Home className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-primary mb-1">28 номеров</h3>
                  <p className="text-sm text-muted">Комфортные номера разных категорий</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-primary mb-1">500+ гостей</h3>
                  <p className="text-sm text-muted">Ежемесячно выбирают наш отель</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-primary mb-1">Безопасность</h3>
                  <p className="text-sm text-muted">24/7 охрана и видеонаблюдение</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-primary mb-1">Сервис</h3>
                  <p className="text-sm text-muted">Индивидуальный подход к каждому гостю</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/bursa-hotel-lobby-elegant/600/700" 
                alt="Bursa Hotel Interior"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">5+ лет</p>
                <p className="text-sm">Успешной работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Наши номера
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
              Каждый номер оформлен с особым вниманием к деталям, чтобы ваш отдых был максимально комфортным
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/bursa-${room.image}/400/300`} 
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-primary mb-2">{room.name}</h3>
                  <p className="text-2xl font-bold text-accent mb-4">{room.price} ₸/ночь</p>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted">
                        <Check className="text-accent mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`https://wa.me/77751146760?text=Хочу%20забронировать%20${room.name}`}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center block mt-auto"
                  >
                    Забронировать
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Все необходимое для комфортного пребывания
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-medium text-primary">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Отзывы наших гостей
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Ваши впечатления — наша главная награда
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-bg p-6 rounded-lg shadow-md flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="fill-current text-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-3 flex-1">{review.text}</p>
                <p className="text-sm text-muted/70">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Следите за нами в Instagram
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              @bursahoteltaraz — будьте в курсе наших новостей и акций
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src={`https://picsum.photos/seed/bursa-hotel-instagram-${item}-lifestyle/400/400`} 
                  alt={`Instagram ${item}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Camera className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://instagram.com/bursahoteltaraz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center"
            >
              <Camera size={20} className="mr-2" />
              Открыть Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            Бронируйте напрямую, без комиссии
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Лучшие цены и гарантия подтверждения бронирования
          </p>
          <a 
            href="https://wa.me/77751146760"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg inline-flex items-center"
          >
            <Phone size={20} className="mr-2" />
            Забронировать в WhatsApp
          </a>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Контакты
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Мы всегда рады видеть вас в нашем отеле
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Адрес</h3>
                    <p className="text-muted">г. Тараз, ул. Айтиева, 91а</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Телефон</h3>
                    <p className="text-muted">+7 775 114 67 60</p>
                    <p className="text-sm text-muted/70">WhatsApp доступен 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <p className="text-muted">info@bursahotel.kz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Время работы</h3>
                    <p className="text-muted">Ресепшн: 24/7</p>
                    <p className="text-sm text-muted/70">Заезд: 14:00, Выезд: 12:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-primary mb-4">Следите за нами</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/bursahoteltaraz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 hover:bg-accent/20 text-accent p-3 rounded-full transition-colors"
                  >
                    <Camera size={24} />
                  </a>
                  <a 
                    href="https://wa.me/77751146760"
                    className="bg-accent/10 hover:bg-accent/20 text-accent p-3 rounded-full transition-colors"
                  >
                    <Phone size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-muted">Карта Тараза, ул. Айтиева, 91а</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Bursa Hotel</h3>
              <p className="text-sm opacity-90">
                Ваш уютный дом в Таразе. Комфорт, сервис и гостеприимство.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-sm opacity-90 hover:text-accent transition-colors">О нас</a>
                <a href="#rooms" className="block text-sm opacity-90 hover:text-accent transition-colors">Номера</a>
                <a href="#amenities" className="block text-sm opacity-90 hover:text-accent transition-colors">Услуги</a>
                <a href="#contacts" className="block text-sm opacity-90 hover:text-accent transition-colors">Контакты</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Бронирование</h4>
              <p className="text-sm opacity-90 mb-4">
                Забронируйте напрямую и получите лучшие цены
              </p>
              <a 
                href="https://wa.me/77751146760"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-medium transition-colors inline-flex items-center text-sm"
              >
                <Phone size={16} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-90">
              © 2024 Bursa Hotel. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent hover:bg-accent/90 text-white p-3 rounded-full shadow-lg transition-colors z-40"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;
