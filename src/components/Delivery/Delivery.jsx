import "./delivery.scss";

function Delivery() {
  return (
    <section id="delivery" className="delivery">
      <div className="container">
        <div className="delivery__inner">
          <div className="delivery-item dostavka">
            <div className="delivery-item-image"></div>
            <div className="delivery-item-info">
              <h2>Доставка</h2>
              <div className="delivery-item-price">
                <p>Доставка, замена и возврат девайса</p>
                <p>
                  <span className="free">
                    <span className="blue">
                      <i class="fa-solid fa-circle"></i>
                    </span>{" "}
                    <span className="yellow">
                      <i class="fa-solid fa-circle"></i>
                    </span>{" "}
                    Бесплатно
                  </span>
                  <span>
                    {" "}
                    <span className="red">
                      <i class="fa-solid fa-circle"></i>
                    </span>{" "}
                    490 ₽{" "}
                  </span>
                </p>
              </div>
              <p>
                Самовывоз бесплатно, <br />
                ежедневно с 09:00 до 22:00
              </p>
            </div>
          </div>
          <div className="delivery-itemTest delivery-item">
            <h2>Хотите тест-драйв?</h2>
            <p>
              Приезжайте на бесплатный тест-драйв в наш офис, в 5 минутах от м.
              Павелецкая
            </p>
            <div>
              <img
                src="https://static.tildacdn.com/tild6135-6230-4238-b330-306635653230/Group_5436.png"
                alt=""
              />
            </div>
            <button>Как пройти</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
