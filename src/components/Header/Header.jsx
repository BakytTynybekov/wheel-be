import { Link } from "react-scroll";
import "./header.scss";

function Header({ siderBar, setSideBar }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-118}
              duration={200}
              className="menu-item-link "
            >
              <img
                src="https://static.tildacdn.com/tild3661-6264-4535-a130-313133303532/photo.svg"
                alt="logo"
              />
            </Link>
          </div>

          <nav onClick={(e) => e.stopPropagation()}>
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
                    duration={200}
                    className="menu-item-link "
                  >
                    О подписке
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    activeClass="active"
                    to="devices"
                    spy={true}
                    smooth={true}
                    offset={-118}
                    duration={200}
                    className="menu-item-link "
                  >
                    Наши девайсы
                  </Link>
                </li>

                <li className="menu-item">
                  <Link
                    activeClass="active"
                    to="delivery"
                    spy={true}
                    smooth={true}
                    offset={-118}
                    duration={200}
                    className="menu-item-link"
                  >
                    Доставка
                  </Link>
                </li>

                <li className="menu-item">
                  <Link
                    activeClass="active"
                    to="questions"
                    spy={true}
                    smooth={true}
                    offset={-118}
                    duration={200}
                    className="menu-item-link "
                  >
                    Частые вопросы{" "}
                  </Link>
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
