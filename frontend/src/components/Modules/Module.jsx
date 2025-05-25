import "./Module.scss"

export default function Module({ i, title, text }) {
  return (
    <div className="module">
      <p className="module__number">{i + 1}</p>
      <div className="module__info">
        <h4 className="module__title">{title}</h4>
        <p className="module__text">{text}</p>
      </div>
    </div>
  )
}
