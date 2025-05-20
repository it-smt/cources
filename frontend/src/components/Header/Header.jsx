import { Link } from "react-router"
import "./Header.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <Link to={"/"} className="header__logo">
            <img src="/img/logo.svg" alt="" />
          </Link>
          <div className="menu">
            <div className="menu__icon">
              <span></span>
            </div>
            <nav className="menu__nav">
              <ul className="menu__list">
                <li>
                  <a href="" className="menu__link">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="/#ourCourses" className="menu__link">
                    Курсы
                  </a>
                </li>
                <li>
                  <Link to={""} className="menu__link">
                    Отзывы
                  </Link>
                </li>
                <li>
                  <Link to={""} className="menu__link">
                    Карьера
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Link to={""} className="header__link">
            Войти
          </Link>
        </div>
      </div>
    </header>
  )
}
