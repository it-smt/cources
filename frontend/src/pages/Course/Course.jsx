import AskQuestion from "@components/AskQuestion/AskQuestion"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import Module from "@components/Modules/Module"
import Requirement from "@components/Requirements/Requirement"
import { addCourse } from "../../utils/addCourse"
import "./Course.scss"

export default function Course() {
  const steps = [
    {
      title: "Письмо станет выразительнее",
      text: "Избавитесь от шаблонов, двусмысленностей и лишнего",
    },
    {
      title: "Текст станет структурнее",
      text: "Научитесь писать связно, логично и с ритмом",
    },
    {
      title: "Создадите авторский текст",
      text: "Реализуете знания в итоговой самостоятельной работе",
    },
  ]

  const variants = [
    {
      title: "6 модулей",
      text: "Каждый посвящён отдельному аспекту писательского стиля",
    },
    {
      title: "Материалы курса",
      text: "Информация представлена в наглядной и лаконичной форме",
    },
    {
      title: "Финальное задание",
      text: "Создание собственного текста на основе пройденного материала",
    },
  ]

  const img = {
    0: "/img/dashboard.svg",
    1: "/img/bulb-light-on.svg",
    2: "/img/education.svg",
  }

  const modules = [
    {
      title: "Введение в стиль",
      text: "Что такое стиль и почему он важен",
    },
    {
      title: "Поиск авторского голоса",
      text: "Способы развития индивидуального подхода к письму",
    },
    {
      title: "Ясность и выразительность",
      text: "Принципы логичного, понятного и выразительного изложения",
    },
    {
      title: "Интонация и ритм",
      text: "Как управлять звучанием текста и выстраивать его темп",
    },
    {
      title: "Редактирование",
      text: "Методы устранения избыточности и повышения читаемости",
    },
    {
      title: "Итоговая работа",
      text: "Создание собственного связного текста",
    },
  ]

  const title = "Писательский стиль"

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        {/* Course Head */}

        <div className="course-head">
          <div className="container">
            <div className="course-head__container">
              <h1 className="course-head__title">{title}</h1>
              <a
                onClick={() =>
                  addCourse({
                    title: title,
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
            <p className="purpose__text">
              Цель курса — сформировать у слушателя основы индивидуального
              писательского стиля, научить ясно и выразительно формулировать
              мысли, избегать шаблонных формулировок и развивать собственный
              голос в тексте. Курс ориентирован на начинающих авторов, а также
              на тех, кто работает с текстами и стремится повысить уровень
              выразительности своей письменной речи.
            </p>
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
              <Requirement
                title={"Сложности с выразительностью"}
                text={
                  "Текст кажется однообразным или перегруженным лишними словами"
                }
              />
              <Requirement
                title={"Нужен собственный стиль"}
                text={
                  "Есть желание писать так, чтобы тексты были узнаваемыми и живыми"
                }
              />
              <Requirement
                title={"Важно улучшить письменную речь"}
                text={
                  "Для работы над книгой, блогом, статьями, эссе и другими форматами"
                }
              />
              <Requirement
                title={"Готовитесь к созданию текста"}
                text={
                  "И хотите заложить стилистическую основу перед началом работы"
                }
              />
            </div>
          </div>
        </div>

        {/* End Requirements */}

        {/* Inside */}

        <div className="inside">
          <div className="container">
            <h2 className="inside__title">Что внутри курса</h2>
            <div className="inside__variants">
              {variants.map((item, i) => {
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
              {steps.map((step, index) => (
                <div className="step-wrapper" key={index}>
                  <div className="step">
                    <div className="circle">{index + 1}</div>
                    {index < steps.length - 1 && <div className="line" />}
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
                {modules.map((item, i) => {
                  return (
                    <Module key={i} i={i} title={item.title} text={item.text} />
                  )
                })}
              </div>
              <a
                onClick={() =>
                  addCourse({
                    title: title,
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
  )
}
