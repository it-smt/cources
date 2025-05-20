import AskQuestion from "@components/AskQuestion/AskQuestion"
import CareerAfter from "@components/CareerAfter/CareerAfter"
import CreateBook from "@components/CreateBook/CreateBook"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import MainHead from "@components/MainHead/MainHead"
import OurCourses from "@components/OurCourses/OurCourses"
import Reviews from "@components/Reviews/Reviews"
import "./Home.scss"

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <MainHead />
        <CreateBook />
        <OurCourses />
        <Reviews />
        <CareerAfter />
        <AskQuestion />
      </main>
      <Footer />
    </div>
  )
}
