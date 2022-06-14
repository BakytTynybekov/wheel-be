import "./subscription.scss";

function AboutSubscription() {
  return (
    <div id="about-subscription" className="subscription">
      <div className="container">
        <div className="subscription__inner">
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
            <div className="subscription-item">
              <div className="subscription-item-photo ">
                <img
                  className="subscription-item-photo-first"
                  src="https://avatars.mds.yandex.net/get-zen_doc/197911/pub_5c7eb1455c123c00b35e3e46_5c7eb1b14ee3e500b3c0dbd0/scale_1200"
                  alt=""
                />
              </div>
              <div>
                <h2>Экономить просто</h2>
                <p>
                  Не надо оплачивать сразу весь срок аренды, только ежемесячный
                  платеж
                </p>
              </div>
            </div>
            <div className="subscription-item">
              <div className="subscription-item-photo">
                <img
                  src="https://thumb.tildacdn.com/tild6661-6635-4138-b930-386564616565/-/cover/386x272/center/center/-/format/webp/image_9.png"
                  alt=""
                />
              </div>
              <div>
                <h2>Не думайте о поломках</h2>
                <p>
                  Сломается — мы приедем и обменяем на новый. Без залогов и
                  забот о ремонте!
                </p>
              </div>
            </div>
            <div className="subscription-item">
              <div className="subscription-item-photo">
                <img
                  src="https://thumb.tildacdn.com/tild6532-6638-4535-a466-643032363036/-/cover/372x352/center/center/-/format/webp/image_8.png"
                  alt=""
                />
              </div>
              <div>
                <h2>Платите только когда пользуетесь</h2>
                <p>
                  В конце месяца можно отменить подписку и вернуть девайс или
                  оплатить следующий месяц и продолжить его использовать
                </p>
              </div>
            </div>
            <div className="subscription-item">
              <div className="subscription-item-photo">
                <img
                  className="last"
                  src="https://thumb.tildacdn.com/tild3564-6232-4263-b835-343765626661/-/cover/316x438/center/center/-/format/webp/image_10.png"
                  alt=""
                />
              </div>
              <div>
                <h2>Не ограничивайте себя</h2>
                <p>
                  Можно подписаться на несколько девайсов или в конце месяца
                  заменить девайс на другой. Не ограничивайте себя
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSubscription;
