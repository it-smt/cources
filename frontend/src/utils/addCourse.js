export const addCourse = newCourse => {
  const courses = JSON.parse(localStorage.getItem("my-courses")) || []
  const updated =
    courses && courses.includes(newCourse)
      ? [...courses, newCourse]
      : [newCourse]
  localStorage.setItem("my-courses", JSON.stringify(updated))
}
