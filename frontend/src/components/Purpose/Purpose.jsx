import "./Purpose.scss"

export default function Purpose({ text }) {
  return (
    <div className="purpose">
      <div className="container">
        <p className="purpose__text">{text}</p>
      </div>
    </div>
  )
}
