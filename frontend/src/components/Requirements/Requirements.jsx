import Requirement from "./Requirement"
import "./Requirements.scss"

export default function Requirements() {
  return (
    <div className="requirements">
      <div className="container">
        <h2 className="requirements__title">Вам подходит этот курс, если</h2>
        <div className="requirements__grid">
          <Requirement
            title={"Сложности с выразительностью"}
            text={
              "Текст кажется однообразным или перегруженным лишними словами"
            }
          />
          <Requirement
            title={"Сложности с выразительностью"}
            text={
              "Текст кажется однообразным или перегруженным лишними словами"
            }
          />
          <Requirement
            title={"Сложности с выразительностью"}
            text={
              "Текст кажется однообразным или перегруженным лишними словами"
            }
          />
          <Requirement
            title={"Сложности с выразительностью"}
            text={
              "Текст кажется однообразным или перегруженным лишними словами"
            }
          />
        </div>
      </div>
    </div>
  )
}
