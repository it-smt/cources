import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import "./CourseCard.scss"

export default function CourseCard({ id_page, number, title, description }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        scale: hovered ? 1.1 : 1,
        backgroundColor: hovered ? "rgb(92, 8, 8)" : "rgb(17, 16, 16)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="card"
    >
      <h2 className="card__number">{number}</h2>
      <div className="card__wrapper">
        <h3 className="card__title">{title}</h3>

        <AnimatePresence>
          {hovered && (
            <motion.p
              key="desc"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="card__description"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="card__btn-wrapper">
          <a href={`/course/${id_page}`} className="card__btn">
            Записаться
          </a>
        </div>
      </div>
    </motion.div>
  )
}
