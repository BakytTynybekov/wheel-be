import "./footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="contacts">
            <h2>Контакты</h2>
            <div className="socials">
              <a href="/">
                <span>
                  <i class="fa-brands fa-instagram"></i>
                </span>
              </a>
              <a href="/">
                <span>
                  <i class="fa-brands fa-telegram"></i>
                </span>
              </a>
              <a href="/">
                <span>
                  <i class="fa-brands fa-whatsapp"></i>
                </span>
              </a>
            </div>
            <p>Ежедневно с 09:00 - 22:00</p>
            <p>
              115114 г. Москва, <br /> 1-й Кожевнический пер., д. 6, стр. 6
            </p>
          </div>
          <div className="emails">
            <p>
              <span>Общие вопросы:</span>
              <a href="">info@wheelbe.ru</a>
            </p>
            <p>
              <span>Сотрудничество:</span>
              <a href="/">marketing@wheelbe.ru</a>
            </p>
            <p>
              <span>Для юр. лиц:</span>
              <a href="/">marketing@wheelbe.ru</a>
            </p>
            <p>
              <span>Франчайзинг:</span>
              <a href="/">marketing@wheelbe.ru</a>
            </p>
            <p>
              <span>Работа у нас:</span>
              <a href="/">marketing@wheelbe.ru</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
