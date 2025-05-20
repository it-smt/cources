import Course from "@pages/Course/Course"
import Home from "@pages/Home/Home"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import "./styles/_fonts.scss"
import "./styles/_null.scss"
import "./styles/main.scss"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
