import Dropdown from "@components/Dropdown/Dropdown"
import { useEffect, useState } from "react"
import "./CareerAfter.scss"

export default function CareerAfter() {
  const [dropdowns, setDropdowns] = useState([])

  useEffect(() => {
    fetch("/data/db.json")
      .then(res => res.json())
      .then(data => setDropdowns(data.careerDropdown))
      .catch(err => console.error(`Ошибка получения JSON: ${err}`))
  }, [])

  return (
    <div className="career-after">
      <div className="container">
        <h2 className="career-after__title">Карьера после курса</h2>
        <p className="career-after__subtitle">
          Здесь Вы найдёте полезные советы по публикации, участию в конкурсах и
          продвижению ваших работ после курса
        </p>
        <div className="career-after__dropdown">
          {dropdowns.map((item, idx) => {
            return <Dropdown key={idx} title={item.title} text={item.text} />
          })}
        </div>
      </div>
    </div>
  )
}
