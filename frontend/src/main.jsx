import CareerAdmin from "@pages/CareerAdmin/CareerAdmin"
import Course from "@pages/Course/Course"
import CourseDetail from "@pages/CourseDetail/CourseDetail"
import Home from "@pages/Home/Home"
import MyCourses from "@pages/MyCourses/MyCourses"
import "@styles/_fonts.scss"
import "@styles/_null.scss"
import "@styles/main.scss"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/course/detail" element={<CourseDetail />} />
        <Route path="/career-admin" element={<CareerAdmin />} />
        <Route path="/my-courses" element={<MyCourses />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
