import "./AskQuestion.scss"

export default function AskQuestion() {
  return (
    <div className="ask-question">
      <div className="container">
        <h2 className="ask-question__title">Задать вопрос</h2>
        <form className="ask-question__form">
          <input
            type="text"
            className="ask-question__input"
            placeholder="Ваше имя"
          />
          <input
            type="text"
            className="ask-question__input"
            placeholder="Ваш номер телефона"
          />
          <input
            type="text"
            className="ask-question__input"
            placeholder="Ваша почта"
          />
          <textarea
            rows={5}
            className="ask-question__input textarea"
            placeholder="Ваше сообщение"
          />
          <button className="ask-question__btn" type="submit">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  )
}
