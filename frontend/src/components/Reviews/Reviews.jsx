import ReviewSlider from "@components/ReviewSlider/ReviewSlider"
import "./Reviews.scss"

export default function Reviews() {
  return (
    <div className="content__review review">
      <div className="container">
        <h2 className="review__title">Отзывы студентов</h2>
        <ReviewSlider />
      </div>
    </div>
  )
}
