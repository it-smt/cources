import AskQuestion from "@components/AskQuestion/AskQuestion"
import CourseHead from "@components/CourseHead/CourseHead"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import Inside from "@components/Inside/Inside"
import Modules from "@components/Modules/Modules"
import Purpose from "@components/Purpose/Purpose"
import Requirements from "@components/Requirements/Requirements"
import Roadmap from "@components/Roadmap/Roadmap"
import "./Course.scss"

export default function Course() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <CourseHead />
        <Purpose />
        <Requirements />
        <Inside />
        <Roadmap />
        <Modules />
        <AskQuestion />
      </main>
      <Footer />
    </div>
  )
}
