import { useEffect, useRef, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "./ReviewSlider.scss"

export default function ReviewSlider() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const [isSwiperReady, setIsSwiperReady] = useState(false)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setIsSwiperReady(true)
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
    fetch("/data/db.json")
      .then(res => res.json())
      .then(data => setReviews(data.reviews))
      .catch(err => console.error("Ошибка загрузки JSON", err))
  }, [])

  return (
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
                <p className="review-card__desc">{review.description}</p>
                <p className="review-card__author">{review.author}</p>
                <p className="review-card__course">{review.course}</p>
                <button className="review-card__btn" />
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
  )
}
