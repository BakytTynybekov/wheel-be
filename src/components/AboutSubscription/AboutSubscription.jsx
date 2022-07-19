import { Fade } from "react-reveal";
import { dataSubs } from "./dataSubs";
import "./subscription.scss";

function AboutSubscription() {
  return (
    <div id="about-subscription" className="subscription">
      <div className="container">
        <section className="subscription__inner">
          <header>
            <h1>
              Что такое аренда <span>по подписке?</span>{" "}
            </h1>
            <p>
              Вы получаете в аренду не только сам девайс, но и техническое
              обслуживание с оперативной поддержкой клиентского сервиса.
            </p>
          </header>
          <div className="about-subscription">
            {dataSubs?.map((item, index) => {
              return (
                <Fade key={index} bottom>
                  <div className="subscription-item">
                    <div className="subscription-item-photo">
                      <img className="last" src={item.img} alt="" />
                    </div>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </section>
        <Fade bottom>
          <section className="how">
            <h2>Как это работает?</h2>
            <div className="how__inner">
              <div className="how-item">
                <span>1</span>
                <div className="how-item-info">
                  <h3>Оставьте заявку</h3>
                  <p>Мы забронируем для вас девайс</p>
                </div>
              </div>
              <div className="how-item">
                <span>2</span>
                <div className="how-item-info">
                  <h3>Доставим бесплатно</h3>
                  <p>А также покажем как пользоваться</p>
                </div>
              </div>
              <div className="how-item">
                <span>3</span>
                <div className="how-item-info">
                  <h3>Пользуйтесь девайсом</h3>
                  <p>Если сломается — починим, если надоест — заберем</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </div>
    </div>
  );
}

export default AboutSubscription;
