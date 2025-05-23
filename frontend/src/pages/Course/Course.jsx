import AskQuestion from "@components/AskQuestion/AskQuestion"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import Module from "@components/Modules/Module"
import Requirement from "@components/Requirements/Requirement"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { addCourse } from "../../utils/addCourse"
import "./Course.scss"

export default function Course() {
  const { id } = useParams()

  const [course, setCourse] = useState(null)

  useEffect(() => {
    fetch("/data/courses.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(c => c.id === Number(id))
        setCourse(found)
      })
      .catch(err => console.error(`Ошибка получения JSON: ${err}`))
  }, [id])

  const img = {
    0: "/img/dashboard.svg",
    1: "/img/bulb-light-on.svg",
    2: "/img/education.svg",
  }

  return (
    <>
      {course ? (
        <div className="wrapper">
          <Header />
          <main className="content">
            {/* Course Head */}

            <div className="course-head">
              <div className="container">
                <div className="course-head__container">
                  <h1 className="course-head__title">{course.title}</h1>
                  <a
                    onClick={() =>
                      addCourse({
                        title: course.title,
                        price: "Бесплатно",
                      })
                    }
                    className="course-head__btn"
                  >
                    Записаться на курс
                  </a>
                </div>
              </div>
            </div>

            {/* End Course Head */}

            {/* Purpose */}

            <div className="purpose">
              <div className="container">
                <p className="purpose__text">{course.purpose}</p>
              </div>
            </div>

            {/* End Purpose */}

            {/* Requirements */}

            <div className="requirements">
              <div className="container">
                <h2 className="requirements__title">
                  Вам подходит этот курс, если
                </h2>
                <div className="requirements__grid">
                  {course.requirements?.map((req, idx) => {
                    return <Requirement title={req.title} text={req.text} />
                  })}
                </div>
              </div>
            </div>

            {/* End Requirements */}

            {/* Inside */}

            <div className="inside">
              <div className="container">
                <h2 className="inside__title">Что внутри курса</h2>
                <div className="inside__variants">
                  {course.inside.map((item, i) => {
                    return (
                      <div key={i} className="variant">
                        <img src={img[i]} alt="" className="variant__img" />
                        <h4 className="variant__title">{item.title}</h4>
                        <p className="variant__text">{item.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* End Inside */}

            {/* Roadmap */}

            <div className="roadmap">
              <div className="container">
                <h2 className="roadmap__title">За время курса</h2>
                <div className="roadmap__row">
                  {course.roadmap.map((step, index) => (
                    <div className="step-wrapper" key={index}>
                      <div className="step">
                        <div className="circle">{index + 1}</div>
                        {index < course.roadmap.length - 1 && (
                          <div className="line" />
                        )}
                      </div>
                      <p className="label">
                        <p className="title">{step.title}</p>
                        <p className="text">{step.text}</p>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* End Roadmap */}

            {/* Modules */}

            <div className="modules">
              <div className="container">
                <div className="modules__row">
                  <h1 className="modules__title">Модули курса</h1>
                  <div className="modules__grid">
                    {course.modules.map((item, i) => {
                      return (
                        <Module
                          key={i}
                          i={i}
                          title={item.title}
                          text={item.text}
                        />
                      )
                    })}
                  </div>
                  <a
                    onClick={() =>
                      addCourse({
                        title: course.title,
                        price: "Бесплатно",
                      })
                    }
                    className="modules__link"
                  >
                    Записаться на курс
                  </a>
                </div>
              </div>
            </div>

            {/* End Modules */}

            <AskQuestion />
          </main>
          <Footer />
        </div>
      ) : (
        <p>Загрузка курса...</p>
      )}
    </>
  )
}
