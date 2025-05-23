import emailjs from "emailjs-com"
import { useRef } from "react"
import "./AskQuestion.scss"

export default function AskQuestion({ type = "white" }) {
  const formRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "your_service_id", // ID сервиса
        "your_template_id", // ID шаблона
        formRef.current,
        "your_user_id" // Публичный ключ
      )
      .then(
        result => {
          alert("Сообщение отправлено!")
          formRef.current.reset()
        },
        error => {
          alert("Ошибка при отправке")
        }
      )
  }

  return (
    <div className={type !== "black" ? "ask-question" : "ask-question black"}>
      <div className="container">
        <h2 className="ask-question__title">Задать вопрос</h2>
        <form
          className="ask-question__form"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            className="ask-question__input"
            placeholder="Ваше имя"
            required
          />
          <input
            type="text"
            name="phone"
            className="ask-question__input"
            placeholder="Ваш номер телефона"
          />
          <input
            type="email"
            name="email"
            className="ask-question__input"
            placeholder="Ваша почта"
            required
          />
          <textarea
            rows={5}
            name="message"
            className="ask-question__input textarea"
            placeholder="Ваше сообщение"
            required
          />
          <button className="ask-question__btn" type="submit">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  )
}
