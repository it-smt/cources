import Module from "./Module"
import "./Modules.scss"

export default function Modules() {
  const modules = [
    {
      title: "Введение в стиль",
      text: "Что такое стиль и почему он важен",
    },
    {
      title: "Введение в стиль",
      text: "Что такое стиль и почему он важен",
    },
    {
      title: "Введение в стиль",
      text: "Что такое стиль и почему он важен",
    },
    {
      title: "Введение в стиль",
      text: "Что такое стиль и почему он важен",
    },
    {
      title: "Введение в стиль",
      text: "Что такое стиль и почему он важен",
    },
    {
      title: "Введение в стиль",
      text: "Что такое стиль и почему он важен",
    },
  ]

  return (
    <div className="modules">
      <div className="container">
        <div className="modules__row">
          <h1 className="modules__title">Модули курса</h1>
          <div className="modules__grid">
            {modules.map((item, i) => {
              return (
                <Module key={i} i={i} title={item.title} text={item.text} />
              )
            })}
          </div>
          <a href="" className="modules__link">
            Записаться на курс
          </a>
        </div>
      </div>
    </div>
  )
}
