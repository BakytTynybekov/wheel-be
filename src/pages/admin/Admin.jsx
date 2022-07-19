import React, { useState } from "react";
import { useContext } from "react";
import { Link, Outlet, Navigate } from "react-router-dom";
import "../../components/Header/header.scss";
import { GeneralAuthContext } from "../../context/GeneralContext";
import "./admin.scss";

function Admin() {
  const { logOut, user } = useContext(GeneralAuthContext);
  const [siderBar, setSideBar] = useState(false);

  return (
    <div>
      {user ? (
        <div className="adminPage">
          <header className="header">
            <div className="container">
              <div className="header__inner">
                <div className="logo logout" onClick={() => logOut()}>
                  <button>Выйти</button>
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
                    <div
                      className="close"
                      onClick={() => setSideBar(!siderBar)}
                    >
                      <i class="fa-solid fa-x"></i>
                    </div>
                    <ul className="menu">
                      <li className="menu-item">
                        <Link to="/" className="menu-item-link">
                          Главная страница сайта
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="addDevice" className="menu-item-link">
                          {" "}
                          Добавить девайс
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="" className="menu-item-link">
                          Все девайсы
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="" className="menu-item-link">
                          Заказы
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </header>

          <div className="container">
            <main className="adminpage__inner">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default Admin;
