export const addCourse = async ({ title, price }) => {
  try {
    const res = await fetch("/data/courses.json")
    const allCourses = await res.json()

    const matched = allCourses.find(
      c => c.title.trim().toLowerCase() === title.trim().toLowerCase()
    )
    if (!matched) return console.warn("Курс с таким title не найден")

    const newCourse = {
      id: matched.id,
      title,
      price,
    }

    const courses = JSON.parse(localStorage.getItem("my-courses")) || []

    if (courses.some(course => course.id === newCourse.id)) {
      alert("Вы уже записаны!")
      return
    }

    const updated = [...courses, newCourse]
    localStorage.setItem("my-courses", JSON.stringify(updated))
    alert("Вы записались!")
  } catch (error) {
    console.error("Ошибка при добавлении курса:", error)
  }
}
