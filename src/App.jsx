import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, Wifi, Coffee, Car, Clock, Heart, ChevronUp, Menu, X, Check, Home, Users, Shield, Sparkles, Camera, ChevronDown } from 'lucide-react';

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --ink: #0D0D0D;
    --cream: #F5F0E8;
    --gold: #B8975A;
    --gold-light: #D4B483;
    --muted: #6B6560;
    --card-bg: #141414;
    --border: rgba(184,151,90,0.2);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Jost', sans-serif; background: var(--ink); color: var(--cream); overflow-x: hidden; }

  .navbar {
    position: fixed; top: 0; width: 100%; z-index: 100;
    padding: 0 2rem; transition: background 0.5s, backdrop-filter 0.5s;
  }
  .navbar.scrolled { background: rgba(13,13,13,0.92); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
  .nav-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 80px; }
  .nav-logo { text-decoration: none; }
  .nav-logo-name { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 300; color: var(--cream); letter-spacing: 0.1em; }
  .nav-logo-sub { font-size: 0.6rem; letter-spacing: 0.35em; color: var(--gold); text-transform: uppercase; display: block; margin-top: -4px; }
  .nav-links { display: flex; gap: 2.5rem; align-items: center; list-style: none; }
  .nav-links a { text-decoration: none; color: rgba(245,240,232,0.75); font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; transition: color 0.3s; }
  .nav-links a:hover { color: var(--gold); }
  .nav-book { background: transparent !important; border: 1px solid var(--gold) !important; color: var(--gold) !important; padding: 0.6rem 1.5rem !important; cursor: pointer; font-size: 0.75rem !important; letter-spacing: 0.2em !important; transition: all 0.3s !important; }
  .nav-book:hover { background: var(--gold) !important; color: var(--ink) !important; }
  .hamburger { display: none; background: none; border: none; color: var(--cream); cursor: pointer; padding: 4px; }
  .mobile-menu { display: none; position: fixed; inset: 0; background: var(--ink); z-index: 99; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
  .mobile-menu.open { display: flex; }
  .mobile-menu a { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; color: var(--cream); text-decoration: none; transition: color 0.3s; }
  .mobile-menu a:hover { color: var(--gold); }
  .mobile-book { font-family: 'Jost', sans-serif !important; border: 1px solid var(--gold) !important; color: var(--gold) !important; padding: 0.8rem 2.5rem !important; font-size: 0.9rem !important; letter-spacing: 0.2em !important; text-transform: uppercase !important; margin-top: 0.5rem; }
  .mobile-close { position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; color: var(--cream); cursor: pointer; }

  .hero { position: relative; height: 100vh; min-height: 600px; display: flex; align-items: flex-end; overflow: hidden; }
  .hero-img { position: absolute; inset: 0; object-fit: cover; width: 100%; height: 100%; filter: brightness(0.45); }
  .hero-content { position: relative; z-index: 2; padding: 0 2rem 6rem; max-width: 1200px; margin: 0 auto; width: 100%; }
  .hero-tag { font-size: 0.7rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; }
  .hero-tag::before { content: ''; display: block; width: 40px; height: 1px; background: var(--gold); }
  .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.5rem, 9vw, 8rem); font-weight: 300; line-height: 0.95; color: var(--cream); margin-bottom: 2rem; }
  .hero-title em { font-style: italic; color: var(--gold-light); }
  .hero-sub { font-size: 1rem; color: rgba(245,240,232,0.65); max-width: 400px; line-height: 1.7; margin-bottom: 2.5rem; font-weight: 300; }
  .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-primary { background: var(--gold); color: var(--ink); padding: 1rem 2.5rem; text-decoration: none; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; transition: all 0.3s; display: inline-block; }
  .btn-primary:hover { background: var(--gold-light); }
  .btn-ghost { border: 1px solid rgba(245,240,232,0.4); color: var(--cream); padding: 1rem 2.5rem; text-decoration: none; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; transition: all 0.3s; display: inline-block; }
  .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
  .hero-scroll { position: absolute; bottom: 2.5rem; right: 2rem; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: rgba(245,240,232,0.4); font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; animation: bounce 2s ease-in-out infinite; }
  @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }

  .stats { background: var(--gold); padding: 3rem 2rem; }
  .stats-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; text-align: center; }
  .stat-num { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 300; color: var(--ink); line-height: 1; }
  .stat-label { font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(13,13,13,0.65); margin-top: 0.4rem; }

  .section { padding: 7rem 2rem; }
  .section-dark { background: #0A0A0A; }
  .section-inner { max-width: 1200px; margin: 0 auto; }
  .section-tag { font-size: 0.65rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
  .section-tag::before { content:''; display:block; width:30px; height:1px; background:var(--gold); }
  .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300; line-height: 1.1; margin-bottom: 1.5rem; }
  .section-title em { font-style: italic; color: var(--gold-light); }

  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .about-text { color: rgba(245,240,232,0.65); font-size: 1.05rem; line-height: 1.8; font-weight: 300; }
  .about-text + .about-text { margin-top: 1rem; }
  .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-top: 3rem; }
  .about-stat { border: 1px solid var(--border); padding: 1.5rem; text-align: center; background: var(--card-bg); }
  .about-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 300; color: var(--gold); }
  .about-stat-label { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-top: 0.3rem; }
  .about-img-wrap { position: relative; }
  .about-img { width: 100%; height: 600px; object-fit: cover; display: block; filter: brightness(0.85); }
  .about-badge { position: absolute; bottom: -1.5rem; left: -1.5rem; background: var(--gold); color: var(--ink); padding: 1.5rem 2rem; }
  .about-badge-num { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 300; line-height: 1; }
  .about-badge-label { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; }

  .rooms-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; margin-top: 4rem; }
  .room-card { position: relative; overflow: hidden; cursor: pointer; }
  .room-card:hover .room-img { transform: scale(1.05); filter: brightness(0.4); }
  .room-img { width: 100%; height: 400px; object-fit: cover; display: block; transition: transform 0.6s, filter 0.6s; filter: brightness(0.6); }
  .room-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 2rem; background: linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.2) 60%, transparent 100%); }
  .room-name { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 300; color: var(--cream); margin-bottom: 0.3rem; }
  .room-price { font-size: 0.8rem; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 1rem; }
  .room-features { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.2rem; }
  .room-feature { font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; border: 1px solid rgba(184,151,90,0.3); color: rgba(245,240,232,0.6); padding: 0.25rem 0.6rem; }
  .room-btn { display: inline-block; background: var(--gold); color: var(--ink); padding: 0.7rem 1.5rem; text-decoration: none; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; opacity: 0; transform: translateY(10px); transition: all 0.3s; }
  .room-card:hover .room-btn { opacity: 1; transform: translateY(0); }

  .amenities-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; margin-top: 4rem; }
  .amenity-card { background: var(--card-bg); padding: 2.5rem 2rem; text-align: center; border: 1px solid var(--border); transition: border-color 0.3s, background 0.3s; }
  .amenity-card:hover { border-color: var(--gold); background: #1a1a14; }
  .amenity-icon { color: var(--gold); margin-bottom: 1rem; }
  .amenity-name { font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; }

  .reviews-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; margin-top: 4rem; }
  .review-card { background: var(--card-bg); padding: 2.5rem; border: 1px solid var(--border); display: flex; flex-direction: column; }
  .review-quote { font-family: 'Cormorant Garamond', serif; font-size: 5rem; color: var(--gold); line-height: 1; margin-bottom: -1rem; }
  .review-stars { display: flex; gap: 2px; color: var(--gold); margin-bottom: 1rem; }
  .review-text { color: rgba(245,240,232,0.7); font-size: 0.95rem; line-height: 1.8; font-weight: 300; flex: 1; margin-bottom: 1.5rem; }
  .review-author { display: flex; align-items: center; gap: 1rem; }
  .review-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--gold); color: var(--ink); display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; flex-shrink: 0; }
  .review-name { font-size: 0.85rem; letter-spacing: 0.05em; }
  .review-date { font-size: 0.65rem; color: var(--muted); margin-top: 0.15rem; }

  .insta-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; margin-top: 4rem; }
  .insta-cell { position: relative; overflow: hidden; cursor: pointer; }
  .insta-cell:first-child { grid-row: span 2; }
  .insta-img { width: 100%; height: 220px; object-fit: cover; display: block; filter: brightness(0.8); transition: all 0.5s; }
  .insta-cell:first-child .insta-img { height: 100%; min-height: 440px; }
  .insta-cell:hover .insta-img { filter: brightness(0.4); transform: scale(1.05); }
  .insta-hover { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; color: var(--gold); }
  .insta-cell:hover .insta-hover { opacity: 1; }
  .insta-cta { text-align: center; margin-top: 3rem; }
  .btn-insta { display: inline-flex; align-items: center; gap: 0.75rem; border: 1px solid var(--gold); color: var(--gold); padding: 1rem 2.5rem; text-decoration: none; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; transition: all 0.3s; }
  .btn-insta:hover { background: var(--gold); color: var(--ink); }

  .cta-banner { background: var(--gold); padding: 6rem 2rem; text-align: center; }
  .cta-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 300; color: var(--ink); margin-bottom: 1rem; }
  .cta-sub { color: rgba(13,13,13,0.65); font-size: 1rem; margin-bottom: 2.5rem; }
  .btn-cta { display: inline-flex; align-items: center; gap: 0.75rem; background: var(--ink); color: var(--cream); padding: 1.1rem 2.5rem; text-decoration: none; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 500; transition: background 0.3s; }
  .btn-cta:hover { background: #1a1a1a; }

  .contacts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; margin-top: 4rem; }
  .contact-item { display: flex; gap: 1.5rem; margin-bottom: 2.5rem; align-items: flex-start; }
  .contact-icon { width: 48px; height: 48px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--gold); flex-shrink: 0; }
  .contact-label { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.4rem; }
  .contact-value { color: var(--cream); font-size: 0.95rem; }
  .contact-note { font-size: 0.75rem; color: var(--muted); margin-top: 0.2rem; }
  .map-box { background: var(--card-bg); border: 1px solid var(--border); height: 400px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 1rem; color: var(--muted); font-size: 0.8rem; letter-spacing: 0.1em; }
  .social-links { display: flex; gap: 1rem; margin-top: 2.5rem; }
  .social-link { width: 44px; height: 44px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--muted); text-decoration: none; transition: all 0.3s; }
  .social-link:hover { border-color: var(--gold); color: var(--gold); }

  .footer { background: #080808; border-top: 1px solid var(--border); padding: 4rem 2rem; }
  .footer-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 4rem; }
  .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300; color: var(--cream); letter-spacing: 0.1em; }
  .footer-sub { font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); margin-top: 0.2rem; }
  .footer-desc { color: var(--muted); font-size: 0.85rem; line-height: 1.7; margin-top: 1.2rem; }
  .footer-heading { font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; }
  .footer-links { display: flex; flex-direction: column; gap: 0.75rem; }
  .footer-links a { color: var(--muted); text-decoration: none; font-size: 0.85rem; transition: color 0.3s; }
  .footer-links a:hover { color: var(--cream); }
  .footer-bottom { max-width: 1200px; margin: 3rem auto 0; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: var(--muted); }

  .scroll-top { position: fixed; bottom: 2rem; right: 2rem; z-index: 50; width: 48px; height: 48px; background: var(--gold); color: var(--ink); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
  .scroll-top:hover { background: var(--gold-light); }

  @media (max-width: 900px) {
    .nav-links { display: none; }
    .hamburger { display: block; }
    .about-grid, .contacts-grid { grid-template-columns: 1fr; gap: 3rem; }
    .about-img { height: 380px; }
    .about-badge { left: 0; }
    .rooms-grid { grid-template-columns: 1fr; }
    .room-img { height: 300px; }
    .room-btn { opacity: 1; transform: translateY(0); }
    .amenities-grid { grid-template-columns: repeat(2,1fr); }
    .reviews-grid { grid-template-columns: 1fr; }
    .insta-grid { grid-template-columns: 1fr 1fr; }
    .insta-cell:first-child { grid-row: auto; }
    .insta-cell:first-child .insta-img { min-height: 220px; height: 220px; }
    .footer-inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
    .stats-inner { grid-template-columns: 1fr; }
  }
  @media (max-width: 540px) {
    .hero-title { font-size: 3rem; }
    .hero-actions { flex-direction: column; }
    .hero-content { padding-bottom: 4rem; }
    .section { padding: 4rem 1.2rem; }
  }
`;

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = () => setMobileOpen(false);

  const rooms = [
    { name: 'Стандартный', price: '15 000 ₸ / ночь', img: 'bursa-standard-warm', features: ['Wi-Fi', 'Завтрак', 'Кондиционер', 'Телевизор'] },
    { name: 'Комфорт', price: '20 000 ₸ / ночь', img: 'bursa-comfort-suite', features: ['Wi-Fi', 'Завтрак', 'Мини-бар', 'Рабочий стол'] },
    { name: 'Люкс', price: '30 000 ₸ / ночь', img: 'bursa-luxury-penthouse', features: ['Wi-Fi', 'Завтрак', 'Гостиная', 'Джакузи'] },
  ];

  const reviews = [
    { name: 'Айнур К.', text: 'Прекрасный отель с очень уютной атмосферой. Персонал замечательный, всегда готовы помочь. Номера чистые и комфортные. Обязательно вернусь снова!', date: 'март 2024' },
    { name: 'Дмитрий П.', text: 'Отличное расположение, красивый интерьер. Завтраки очень вкусные, большой выбор. Особая благодарность администраторам за профессионализм.', date: 'февраль 2024' },
    { name: 'Гульнара С.', text: 'Останавливалась с семьей. Все очень понравилось! Дети были в восторге. Чистота, уют, внимание к деталям. Рекомендую всем!', date: 'январь 2024' },
  ];

  const amenities = [
    { icon: Wifi, name: 'Wi-Fi' }, { icon: Coffee, name: 'Завтрак' },
    { icon: Car, name: 'Парковка' }, { icon: Clock, name: '24/7 Ресепшн' },
    { icon: Heart, name: 'Прачечная' }, { icon: Shield, name: 'Сейф' },
    { icon: Users, name: 'Конференц-зал' }, { icon: Sparkles, name: 'Уборка' },
  ];

  return (
    <>
      <style>{style}</style>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <span className="nav-logo-name">Bursa</span>
            <span className="nav-logo-sub">Taraz · Boutique Hotel</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">О нас</a></li>
            <li><a href="#rooms">Номера</a></li>
            <li><a href="#amenities">Услуги</a></li>
            <li><a href="#reviews">Отзывы</a></li>
            <li><a href="#contacts">Контакты</a></li>
            <li><a href="https://wa.me/77751146760" className="nav-book">Бронировать</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMobileOpen(true)}><Menu size={26}/></button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={close}><X size={28}/></button>
        <a href="#about" onClick={close}>О нас</a>
        <a href="#rooms" onClick={close}>Номера</a>
        <a href="#amenities" onClick={close}>Услуги</a>
        <a href="#reviews" onClick={close}>Отзывы</a>
        <a href="#contacts" onClick={close}>Контакты</a>
        <a href="https://wa.me/77751146760" onClick={close} className="mobile-book">Забронировать</a>
      </div>

      <section className="hero">
        <img src="https://picsum.photos/seed/bursa-luxury-hotel-night/1920/1080" alt="Bursa Hotel" className="hero-img"/>
        <div className="hero-content">
          <div className="hero-tag">Бутик-отель · Тараз</div>
          <h1 className="hero-title">Бурса.<br/><em>Место,</em><br/>где отдыхают.</h1>
          <p className="hero-sub">Уютный отель в сердце Тараза. Казахское гостеприимство, современный комфорт, неповторимая атмосфера.</p>
          <div className="hero-actions">
            <a href="https://wa.me/77751146760" className="btn-primary">Забронировать</a>
            <a href="#rooms" className="btn-ghost">Смотреть номера</a>
          </div>
        </div>
        <div className="hero-scroll"><ChevronDown size={18}/><span>Scroll</span></div>
      </section>

      <div className="stats">
        <div className="stats-inner">
          {[['4.9','Рейтинг на 2ГИС'],['335','Отзывов гостей'],['5+','Лет на рынке']].map(([n,l])=>(
            <div key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
          ))}
        </div>
      </div>

      <section className="section" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div>
              <div className="section-tag">О нас</div>
              <h2 className="section-title">Дом вдали<br/>от <em>дома</em></h2>
              <p className="about-text">Мы — уютный бутик-отель в сердце Тараза, где каждый гость чувствует себя как дома. Наша команда создала атмосферу тепла и гостеприимства, сочетая казахские традиции с современным комфортом.</p>
              <p className="about-text">С 2019 года мы радуем гостей сервисом, вниманием к деталям и индивидуальным подходом. В Bursa вы найдете настоящий дом вдали от дома.</p>
              <div className="about-stats">
                {[['28','Номеров'],['500+','Гостей в месяц'],['4★','Категория'],['24/7','Ресепшн']].map(([n,l])=>(
                  <div className="about-stat" key={l}><div className="about-stat-num">{n}</div><div className="about-stat-label">{l}</div></div>
                ))}
              </div>
            </div>
            <div className="about-img-wrap">
              <img src="https://picsum.photos/seed/bursa-hotel-interior-warm/600/700" alt="Interior" className="about-img"/>
              <div className="about-badge"><div className="about-badge-num">5+</div><div className="about-badge-label">Лет успешной работы</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="rooms">
        <div className="section-inner">
          <div className="section-tag">Номера</div>
          <h2 className="section-title">Наши <em>номера</em></h2>
          <div className="rooms-grid">
            {rooms.map((r,i)=>(
              <div className="room-card" key={i}>
                <img src={`https://picsum.photos/seed/${r.img}/600/500`} alt={r.name} className="room-img"/>
                <div className="room-overlay">
                  <div className="room-name">{r.name}</div>
                  <div className="room-price">{r.price}</div>
                  <div className="room-features">{r.features.map(f=><span className="room-feature" key={f}>{f}</span>)}</div>
                  <a href={`https://wa.me/77751146760?text=Хочу%20забронировать%20${r.name}`} className="room-btn">Забронировать</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="amenities">
        <div className="section-inner">
          <div className="section-tag">Услуги</div>
          <h2 className="section-title">Всё для <em>комфорта</em></h2>
          <div className="amenities-grid">
            {amenities.map(({icon:Icon,name})=>(
              <div className="amenity-card" key={name}>
                <div className="amenity-icon"><Icon size={28}/></div>
                <div className="amenity-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="reviews">
        <div className="section-inner">
          <div className="section-tag">Отзывы</div>
          <h2 className="section-title">Что говорят<br/><em>гости</em></h2>
          <div className="reviews-grid">
            {reviews.map((r,i)=>(
              <div className="review-card" key={i}>
                <div className="review-quote">"</div>
                <div className="review-stars">{[...Array(5)].map((_,j)=><Star key={j} size={14} fill="currentColor"/>)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name[0]}</div>
                  <div><div className="review-name">{r.name}</div><div className="review-date">{r.date}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-tag">Instagram</div>
          <h2 className="section-title">@bursahoteltaraz</h2>
          <div className="insta-grid">
            {[1,2,3,4,5].map(n=>(
              <div className="insta-cell" key={n}>
                <img src={`https://picsum.photos/seed/bursa-insta-photo-${n}/500/500`} alt="" className="insta-img"/>
                <div className="insta-hover"><Camera size={28}/></div>
              </div>
            ))}
          </div>
          <div className="insta-cta">
            <a href="https://instagram.com/bursahoteltaraz" target="_blank" rel="noopener noreferrer" className="btn-insta">
              <Camera size={16}/> Открыть Instagram
            </a>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2 className="cta-title">Бронируйте напрямую.<br/>Лучшие цены гарантированы.</h2>
        <p className="cta-sub">Без комиссий. Быстрое подтверждение через WhatsApp.</p>
        <a href="https://wa.me/77751146760" className="btn-cta"><Phone size={16}/> Написать в WhatsApp</a>
      </div>

      <section className="section" id="contacts">
        <div className="section-inner">
          <div className="section-tag">Контакты</div>
          <h2 className="section-title">Найдите нас<br/>в <em>Таразе</em></h2>
          <div className="contacts-grid">
            <div>
              {[
                {icon:MapPin,label:'Адрес',value:'г. Тараз, ул. Айтиева, 91а'},
                {icon:Phone,label:'Телефон',value:'+7 775 114 67 60',note:'WhatsApp доступен 24/7'},
                {icon:Mail,label:'Email',value:'info@bursahotel.kz'},
                {icon:Clock,label:'Режим работы',value:'Ресепшн: 24/7',note:'Заезд 14:00 · Выезд 12:00'},
              ].map(({icon:Icon,label,value,note})=>(
                <div className="contact-item" key={label}>
                  <div className="contact-icon"><Icon size={20}/></div>
                  <div>
                    <div className="contact-label">{label}</div>
                    <div className="contact-value">{value}</div>
                    {note && <div className="contact-note">{note}</div>}
                  </div>
                </div>
              ))}
              <div className="social-links">
                <a href="https://instagram.com/bursahoteltaraz" className="social-link" target="_blank" rel="noopener noreferrer"><Camera size={18}/></a>
                <a href="https://wa.me/77751146760" className="social-link"><Phone size={18}/></a>
              </div>
            </div>
            <div className="map-box"><MapPin size={32} color="#B8975A"/><span>г. Тараз, ул. Айтиева, 91а</span></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Bursa</div>
            <div className="footer-sub">Boutique Hotel · Taraz</div>
            <p className="footer-desc">Уютный бутик-отель в сердце Тараза. Комфорт, сервис и казахское гостеприимство.</p>
          </div>
          <div>
            <div className="footer-heading">Навигация</div>
            <div className="footer-links">
              <a href="#about">О нас</a><a href="#rooms">Номера</a>
              <a href="#amenities">Услуги</a><a href="#reviews">Отзывы</a>
              <a href="#contacts">Контакты</a>
            </div>
          </div>
          <div>
            <div className="footer-heading">Бронирование</div>
            <div className="footer-links">
              <a href="https://wa.me/77751146760">WhatsApp</a>
              <a href="https://instagram.com/bursahoteltaraz">Instagram</a>
              <a href="mailto:info@bursahotel.kz">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Bursa Hotel. Все права защищены.</span>
          <span style={{color:'#B8975A'}}>Тараз, Казахстан</span>
        </div>
      </footer>

      {isScrolled && (
        <button className="scroll-top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}><ChevronUp size={20}/></button>
      )}
    </>
  );
};

export default App;