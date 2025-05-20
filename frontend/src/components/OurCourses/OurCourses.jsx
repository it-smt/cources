import CourseCard from "@components/CourseCard/CourseCard"
import { useEffect, useState } from "react"
import "./OurCourses.scss"

export default function OurCourses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch("/data/db.json")
      .then(res => res.json())
      .then(data => setCourses(data.courses))
      .catch(err => console.error(`Ошибка получения JSON: ${err}`))
  }, [])

  return (
    <div id="ourCourses" className="content__our-courses our-courses">
      <div className="container">
        <h2 className="our-courses__title">Наши курсы</h2>
        <div className="our-courses__courses">
          {courses.map((card, index) => {
            return (
              <CourseCard
                key={index}
                number={card.number}
                title={card.title}
                description={card.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
