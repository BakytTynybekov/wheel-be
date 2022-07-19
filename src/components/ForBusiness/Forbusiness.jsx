import { Link } from "react-scroll";
import "./for-business.scss";

function Forbusiness() {
  return (
    <section id="business" className="for-business">
      <div className="container">
        <h1>
          Нужен транспорт для работы <span>курьером</span> или бизнеса?
        </h1>
        <div className="for-business__inner">
          <div className="courrier for-business-item">
            <div className="courrier-info">
              <h3>Для курьеров</h3>
              <p>
                Доставляйте больше заказов и уставайте меньше в течение рабочего
                дня
              </p>
              <button>
                <Link to="devices">Выбрать девайс</Link>
              </button>
            </div>
            <div className="courrier-image">
              <img
                src="https://thumb.tildacdn.com/tild3637-3633-4537-b132-613935336137/-/cover/302x280/center/center/-/format/webp/74fce5cd-dbcd-45b0-8.png"
                alt=""
              />
            </div>
          </div>
          <div className="business for-business-item">
            <div className="business-info">
              <h3>Для курьеров</h3>
              <p>
                Доставляйте больше заказов и уставайте меньше в течение рабочего
                дня
              </p>
              <button>
                <Link to="devices">Выбрать девайс</Link>
              </button>
            </div>
            <div className="business-image">
              <img
                src="https://thumb.tildacdn.com/tild3836-6564-4539-b335-346134353462/-/cover/440x328/center/center/-/format/webp/6bb5cc79-f9fd-419f-a.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forbusiness;
