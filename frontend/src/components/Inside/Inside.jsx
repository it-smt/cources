import "./Inside.scss"
import Variant from "./Variant"

export default function Inside() {
  const variants = [
    {
      title: "6 модулей",
      text: "Каждый посвящён отдельному аспекту писательского стиля",
    },
    {
      title: "6 модулей",
      text: "Каждый посвящён отдельному аспекту писательского стиля",
    },
    {
      title: "6 модулей",
      text: "Каждый посвящён отдельному аспекту писательского стиля",
    },
  ]

  return (
    <div className="inside">
      <div className="container">
        <h2 className="inside__title">Что внутри курса</h2>
        <div className="inside__variants">
          {variants.map((item, i) => {
            return <Variant key={i} i={i} title={item.title} text={item.text} />
          })}
        </div>
      </div>
    </div>
  )
}
