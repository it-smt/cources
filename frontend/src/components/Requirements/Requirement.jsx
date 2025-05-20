export default function Requirement({ title, text }) {
  return (
    <div className="requirement">
      <h3 className="requirement__title">{title}</h3>
      <div className="requirement__text">{text}</div>
    </div>
  )
}
