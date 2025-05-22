import { useState } from "react"
import { Link } from "react-router"
import "./Header.scss"

export default function Header() {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => setMenuActive(!menuActive)

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <Link
            onClick={() => setMenuActive(false)}
            to="/"
            className="header__logo"
          >
            <img src="/img/logo.svg" alt="logo" />
          </Link>

          <nav className={`menu ${menuActive ? "active" : ""}`}>
            <div className="menu__icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="menu__list">
              <li>
                <a
                  onClick={() => setMenuActive(false)}
                  href="/"
                  className="menu__link"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  onClick={() => setMenuActive(false)}
                  href="/#ourCourses"
                  className="menu__link"
                >
                  Курсы
                </a>
              </li>
              <li>
                <Link
                  onClick={() => setMenuActive(false)}
                  to=""
                  className="menu__link"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMenuActive(false)}
                  to=""
                  className="menu__link"
                >
                  Карьера
                </Link>
              </li>

              {/* "Войти" показываем только на мобилке */}
              <li className="menu__login-mobile">
                <Link
                  onClick={() => setMenuActive(false)}
                  to=""
                  className="menu__link"
                >
                  Войти
                </Link>
              </li>
            </ul>
          </nav>

          {/* "Войти" только на десктопе */}
          <Link
            onClick={() => setMenuActive(false)}
            to=""
            className="header__link"
          >
            Войти
          </Link>
        </div>
      </div>
    </header>
  )
}
