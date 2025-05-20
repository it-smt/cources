import "./CreateBook.scss"

export default function CreateBook() {
  return (
    <div className="content__create-book create-book">
      <div className="container">
        <h2 className="create-book__title">Путь к созданию книги</h2>
        <p className="create-book__subtitle">
          Шаги, которые проведут Вас от первого слова до изданной книги
        </p>
        <div className="create-book__steps">
          <div className="create-book__step step">
            <img src="/img/person-1.svg" alt="" />
            <h6 className="step__title">Регистрация</h6>
            <p className="step__subtitle">
              Создайте аккаунт и получите доступ к курсам
            </p>
          </div>
          <div className="create-book__step step">
            <img src="/img/calendar-check.svg" alt="" />
            <h6 className="step__title">Курс и уроки</h6>
            <p className="step__subtitle">
              Выберите подходящий курс и учитесь в удобное время
            </p>
          </div>
          <div className="create-book__step step">
            <img src="/img/file.svg" alt="" />
            <h6 className="step__title">Публикация книги</h6>
            <p className="step__subtitle">
              Поделитесь своим произведением с читателями
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
