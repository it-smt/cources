import { useState } from "react"
import "./Dropdown.scss"

export default function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img
          src="/img/arrow-dropdown.svg"
          alt=""
          className={`arrow ${isOpen ? "rotate" : ""}`}
        />
      </button>
      <div className="dropdown__content">
        <p>{text}</p>
      </div>
    </div>
  )
}
