import { useState } from "react";
import { Link } from "react-scroll";
import "./header.scss";

function Header() {
  const [siderBar, setSideBar] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <img
              src="https://static.tildacdn.com/tild3661-6264-4535-a130-313133303532/photo.svg"
              alt="logo"
            />
          </div>

          <nav>
            <div className="bars" onClick={() => setSideBar(!siderBar)}>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div
              className={
                siderBar ? "menu-container activeNav" : "menu-container"
              }
            >
              <div className="close" onClick={() => setSideBar(!siderBar)}>
                <i class="fa-solid fa-x"></i>
              </div>

              <ul className="menu">
                <li className="menu-item">
                  <Link
                    activeClass="active"
                    to="about-subscription"
                    spy={true}
                    smooth={true}
                    offset={-118}
                    duration={100}
                    className="menu-item-link "
                  >
                    О подписке
                  </Link>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    Наши девайсы
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    Преимущества
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    Доставка
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    О нас
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="menu-item-link">
                    Частые вопросы
                  </a>
                </li>
              </ul>
              <div className="menu-info">
                <p>info@moydevice.ru</p>
                <p>+7 (495) 152-64-15</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
