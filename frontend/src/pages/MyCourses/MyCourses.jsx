import Header from "@components/Header/Header"
import { useEffect, useState } from "react"
import "./MyCourses.scss"

export default function MyCourses() {
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
    <>
      <Header />
      <div className="my-courses">
        <div className="container">
          <h2 className="my-courses__title">Мои курсы</h2>
          <div className="my-courses__grid">
            <h4 className="my-courses__head">Выбранные курсы:</h4>
            <h4 className="my-courses__head">Цена:</h4>
            {courses &&
              courses.map((item, idx) => {
                return (
                  <>
                    <a
                      href={`/course/detail`}
                      key={idx}
                      className="my-courses__course"
                    >
                      {item.title}
                      <span
                        className="my-courses__delete"
                        onClick={e => {
                          e.preventDefault()
                          e.stopPropagation()
                          removeCourse(item.title)
                        }}
                      >
                        -
                      </span>
                    </a>
                    <p className="my-courses__course">{item.price}</p>
                  </>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
