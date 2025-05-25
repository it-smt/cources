import AskQuestion from "@components/AskQuestion/AskQuestion"
import CourseCard from "@components/CourseCard/CourseCard"
import Dropdown from "@components/Dropdown/Dropdown"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import { useEffect, useRef, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "./Home.scss"

export default function Home() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const [isSwiperReady, setIsSwiperReady] = useState(false)
  const [reviews, setReviews] = useState([])

  const [dropdowns, setDropdowns] = useState([])

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch("/data/db.json")
      .then(res => res.json())
      .then(data => {
        setCourses(data.courses)
        setReviews(data.reviews)
        setDropdowns(data.careerDropdown)
      })
      .catch(err => console.error("Ошибка загрузки JSON", err))
  }, [])

  useEffect(() => {
    const updateHeights = () => {
      const slides = document.querySelectorAll(".swiper-slide .review-card")
      let maxHeight = 0

      slides.forEach(slide => {
        slide.style.height = "auto"
      })

      slides.forEach(slide => {
        const height = slide.offsetHeight
        if (height > maxHeight) maxHeight = height
      })

      slides.forEach(slide => {
        slide.style.height = `${maxHeight}px`
      })
    }

    setTimeout(updateHeights, 100)

    window.addEventListener("resize", updateHeights)
    return () => {
      window.removeEventListener("resize", updateHeights)
    }
  }, [])

  useEffect(() => {
    setIsSwiperReady(true)
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        {/* Main Head */}
        <div className="content__head head">
          <div className="container">
            <h1 className="head__title">Верстальник</h1>
            <p className="head__subtitle">
              Пройди путь от идеи до готовой книги вместе с нами
            </p>
            <a className="head__link" href="#ourCourses">
              Перейти к курсу
            </a>
          </div>
        </div>
        {/* End Main Head */}

        {/* Create Book */}
        <div className="content__create-book create-book">
          <div className="container">
            <h2 className="create-book__title">Путь к созданию книги</h2>
            <p className="create-book__subtitle">
              Шаги, которые проведут Вас от первого слова до изданной книги
            </p>
            <div className="create-book__steps">
              <div className="create-book__step step">
                <img src="/img/person-1.svg" alt="" />
                <h6 className="step__title">Регистрация</h6>
                <p className="step__subtitle">
                  Создайте аккаунт и получите доступ к курсам
                </p>
              </div>
              <div className="create-book__step step">
                <img src="/img/calendar-check.svg" alt="" />
                <h6 className="step__title">Курс и уроки</h6>
                <p className="step__subtitle">
                  Выберите подходящий курс и учитесь в удобное время
                </p>
              </div>
              <div className="create-book__step step">
                <img src="/img/file.svg" alt="" />
                <h6 className="step__title">Публикация книги</h6>
                <p className="step__subtitle">
                  Поделитесь своим произведением с читателями
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Create Book */}

        {/* Our Courses */}

        <div id="ourCourses" className="content__our-courses our-courses">
          <div className="container">
            <h2 className="our-courses__title">Наши курсы</h2>
            <div className="our-courses__courses">
              {courses.map((card, idx) => {
                return (
                  <CourseCard
                    key={idx}
                    id_page={card.id_page}
                    number={card.number}
                    title={card.title}
                    description={card.description}
                  />
                )
              })}
            </div>
          </div>
        </div>
        {/* End Our Courses */}

        {/* Reviews */}
        <div className="content__review review">
          <div className="container">
            <h2 className="review__title">Отзывы студентов</h2>
            <div className="review-slider">
              {isSwiperReady && (
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView={1}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onSwiper={swiper => {
                    // обязательно после того, как refs установлены
                    if (swiper.params.navigation) {
                      swiper.params.navigation.prevEl = prevRef.current
                      swiper.params.navigation.nextEl = nextRef.current
                      swiper.navigation.init()
                      swiper.navigation.update()
                    }
                  }}
                >
                  {reviews.map((review, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="review-card">
                        <h2 className="review-card__text">&ldquo;</h2>
                        <h4 className="review-card__title">{review.title}</h4>
                        <p className="review-card__desc">
                          {review.description}
                        </p>
                        <p className="review-card__author">{review.author}</p>
                        <p className="review-card__course">{review.course}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <button ref={prevRef} className="nav-button prev">
                <img src="/img/arrow-slider.svg" alt="" />
              </button>
              <button ref={nextRef} className="nav-button next">
                <img src="/img/arrow-slider.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        {/* End Reviews */}

        {/* Career After */}
        <div className="career-after">
          <div className="container">
            <h2 className="career-after__title">Карьера после курса</h2>
            <p className="career-after__subtitle">
              Здесь Вы найдёте полезные советы по публикации, участию в
              конкурсах и продвижению ваших работ после курса
            </p>
            <div className="career-after__dropdown">
              {dropdowns.map((item, idx) => {
                return (
                  <Dropdown key={idx} title={item.title} text={item.text} />
                )
              })}
            </div>
          </div>
        </div>
        {/* End Career After */}

        {/* Ask Question */}
        <AskQuestion type={"black"} />
        {/* End Ask Question */}
      </main>
      <Footer />
    </div>
  )
}
