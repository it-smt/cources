export const addCourse = newCourse => {
  const courses = JSON.parse(localStorage.getItem("my-courses")) || []
  let updated = courses
  if (!courses.includes(newCourse)) {
    updated = [...courses, newCourse]
  }
  localStorage.setItem("my-courses", JSON.stringify(updated))
}
