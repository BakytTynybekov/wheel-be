import "./hero.scss";
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <h1>Аренда девайсов по подписке</h1>
          <h2>от 1490 ₽/месяц</h2>
          <p>Без залогов, забот о ремонте и с бесплатной доставкой</p>

          <button>Выбрать свой девайс</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
