import "./MainHead.scss"

export default function MainHead() {
  return (
    <div className="content__head head">
      <div className="container">
        <h1 className="head__title">Верстальник</h1>
        <p className="head__subtitle">
          Пройди путь от идеи до готовой книги вместе с нами
        </p>
        <a className="head__link" href="#ourCourses">
          Перейти к курсу
        </a>
      </div>
    </div>
  )
}
