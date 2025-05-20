export default function Variant({ i, title, text }) {
  const img = {
    0: "/img/dashboard.svg",
    1: "/img/bulb-light-on.svg",
    2: "/img/education.svg",
  }
  return (
    <div className="variant">
      <img src={img[i]} alt="" className="variant__img" />
      <h4 className="variant__title">{title}</h4>
      <p className="variant__text">{text}</p>
    </div>
  )
}
