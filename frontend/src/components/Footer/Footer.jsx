import { Link } from "react-router"
import "./Footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__info">
            <h2 className="footer__title">Верстальник</h2>
            <a href="tel:+7(495)242-75-91" className="footer__phone">
              +7(495)242-75-91
            </a>
          </div>
          <nav className="footer__nav">
            <ul className="footer__list">
              <li>
                <Link className="footer__link">Главная</Link>
              </li>
              <li>
                <a href="/#ourCourses" className="footer__link">
                  Курсы
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Отзывы
                </a>
              </li>
              <li>
                <Link className="footer__link">Карьера</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
