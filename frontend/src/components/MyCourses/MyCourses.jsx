import { useEffect, useState } from "react"
import "./MyCourses.scss"

export default function MyCourses({ func }) {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    setCourses(JSON.parse(localStorage.getItem("my-courses")) || [])
  }, [])

  const removeCourse = titleToRemove => {
    const updated = courses.filter(item => item.title !== titleToRemove)
    setCourses(updated)
    localStorage.setItem("my-courses", JSON.stringify(updated))
  }

  return (
    <div className="my-courses">
      <div className="my-courses__close" onClick={func}>
        X
      </div>
      <h2 className="my-courses__title">Мои курсы</h2>
      <div className="my-courses__grid">
        <h4 className="my-courses__head">Выбранные курсы:</h4>
        <h4 className="my-courses__head">Цена:</h4>
        {courses &&
          courses.map((item, idx) => {
            return (
              <>
                <p key={idx} className="my-courses__course">
                  {item.title}
                  <span
                    className="my-courses__delete"
                    onClick={() => removeCourse(item.title)}
                  >
                    -
                  </span>
                </p>
                <p className="my-courses__course">{item.price}</p>
              </>
            )
          })}
      </div>
    </div>
  )
}
