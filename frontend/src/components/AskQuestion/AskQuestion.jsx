import { useState } from "react"
import "./AskQuestion.scss"

export default function AskQuestion({ type = "white" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = "Введите имя"

    if (!form.email.trim()) newErrors.email = "Введите email"
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Некорректный email"

    if (!form.message.trim()) newErrors.message = "Введите сообщение"

    if (!form.phone.trim()) newErrors.phone = "Введите номер телефона"
    else if (!/^\+?\d{10,15}$/.test(form.phone))
      newErrors.phone = "Некорректный номер (10–15 цифр)"

    return newErrors
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Успешная отправка (имитация)
    alert("Сообщение отправлено!")
    setForm({ name: "", phone: "", email: "", message: "" })
    setSubmitted(true)
  }

  return (
    <div className={type !== "black" ? "ask-question" : "ask-question black"}>
      <div className="container">
        <h2 className="ask-question__title">Задать вопрос</h2>
        <form className="ask-question__form" noValidate onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="ask-question__input"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}

          <input
            type="text"
            name="phone"
            className="ask-question__input"
            placeholder="Ваш номер телефона"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}

          <input
            type="email"
            name="email"
            className="ask-question__input"
            placeholder="Ваша почта"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <textarea
            rows={5}
            name="message"
            className="ask-question__input textarea"
            placeholder="Ваше сообщение"
            value={form.message}
            onChange={handleChange}
            required
          />
          {errors.message && <div className="error">{errors.message}</div>}

          <button className="ask-question__btn" type="submit">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  )
}
