import AskQuestion from "@components/AskQuestion/AskQuestion"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import Purpose from "@components/Purpose/Purpose"
import Requirement from "@components/Requirements/Requirement"
import { useState } from "react"
import "./CourseDetail.scss"

export default function CourseDetail() {
  const [moduleOpen, setModuleOpen] = useState(false)
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="content">
          {/* Course Head */}

          <div className="course-head">
            <div className="container">
              <div className="course-head__container">
                <h1 className="course-head__title">Персонажи</h1>
                <p
                  className="course-head__btn"
                  onClick={() => setModuleOpen(!moduleOpen)}
                >
                  <span>Модули</span>
                  {moduleOpen && (
                    <ul className="course-head__btn-menu">
                      <li>
                        <a href="#start" className="course-head__btn-link">
                          Введение в персонажей
                        </a>
                      </li>
                      <li>
                        <a href="#create" className="course-head__btn-link">
                          Создание характера
                        </a>
                      </li>
                      <li>
                        <a href="#persons" className="course-head__btn-link">
                          Взаимодействие персонажей
                        </a>
                      </li>
                      <li>
                        <a href="#result" className="course-head__btn-link">
                          Итоговая работа
                        </a>
                      </li>
                    </ul>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* End Course Head */}

          {/* Module 1 */}

          <div className="module-1" id="start">
            <div className="container">
              <h2 className="title">Модуль 1: Введение в персонажей</h2>
              <p className="subtitle">Кто такой персонаж?</p>
              <Purpose
                text={
                  "Персонаж — это движущая сила истории. Он — не просто фигура в тексте, а носитель конфликта, мотивации и эмоций. Через персонажа читатель переживает сюжет, чувствует, сопереживает и делает выводы."
                }
              />
              <p className="subtitle">Зачем нужен сильный персонаж?</p>
              <div className="module-1__grid">
                <Requirement
                  title={"Эмоциональное вовлечение"}
                  text={
                    "Живой персонаж вызывает сочувствие, интерес, сопереживание"
                  }
                />
                <Requirement
                  title={"Динамика сюжета"}
                  text={"Действия и решения героя двигают историю вперёд"}
                />
                <Requirement
                  title={"Связь с читателем"}
                  text={
                    "Персонаж может отразить внутренний мир читателя, вызвать узнавание или противоречие"
                  }
                />
              </div>
            </div>
          </div>

          {/* End Module 1 */}

          {/* Module 2 */}

          <div className="module-2" id="create">
            <div className="container">
              <h2 className="title white">Модуль 2: Создание характера</h2>
              <p className="subtitle white">Что делает героя запоминающимся?</p>
              <div className="module-2__text">
                Сильный персонаж строится на сочетании ярких черт, глубокой
                мотивации и внутренней логики. Чтобы он «заработал» в тексте,
                важно продумать не только то, как он выглядит, но и то, почему
                он действует.
              </div>
              <div className="module-2__person person">
                <div className="person__item">
                  <div className="person__img">
                    <img src="/img/person-2.svg" alt="" />
                  </div>
                  <h6 className="person__title">Черты</h6>
                  <p className="person__text">
                    Поведение, привычки, слабости, особенности речи
                  </p>
                </div>
                <div className="person__item">
                  <div className="person__img">
                    <img src="/img/trade.svg" alt="" />
                  </div>
                  <h6 className="person__title">Мотивация</h6>
                  <p className="person__text">
                    Цели и страхи, которые определяют действия
                  </p>
                </div>
                <div className="person__item">
                  <div className="person__img">
                    <img src="/img/edit.svg" alt="" />
                  </div>
                  <h6 className="person__title">История</h6>
                  <p className="person__text">
                    Прошлое персонажа влияет на его поступки в настоящем
                  </p>
                </div>
              </div>
              <div className="module-2__practice practice">
                <div className="subtitle">Практические методы</div>
                <div className="practice__items">
                  <p className="practice__text">
                    Составьте анкету персонажа с вопросами о его жизни, целях,
                    страхах
                  </p>
                  <p className="practice__text">
                    Придумайте героя с необычным сочетанием черт
                  </p>
                  <p className="practice__text">
                    Подумайте, как бы он повёл себя в критической ситуации
                  </p>
                </div>
              </div>
              <div className="module-2__last">
                <h2 className="subtitle">Упражнения для развития героя</h2>
                <div className="module-2__texts">
                  <p className="module-2__texts-item">
                    Придумайте персонажа с одной сильной чертой и придумайте ему
                    противоположную слабость
                  </p>
                  <p className="module-2__texts-item">
                    Придумайте персонажа с одной сильной чертой и придумайте ему
                    противоположную слабость
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* End Module 2 */}

          {/* Module 3 */}

          <div className="module-3" id="persons">
            <div className="container">
              <h2 className="title">Модуль 3: Взаимодействие персонажей</h2>
              <p className="subtitle">Почему важны связи между персонажами?</p>
              <div className="module-3__req">
                <Requirement
                  title={"Конфликты и союзники"}
                  text={
                    "Через противостояние или поддержку герой проявляет свои сильные и слабые стороны. Такие отношения помогают глубже раскрыть характер"
                  }
                />
                <Requirement
                  title={"Движение сюжета"}
                  text={
                    "Диалоги, споры, альянсы и разрывы между персонажами становятся ключевыми точками развития истории и создают напряжение"
                  }
                />
                <Requirement
                  title={"Изменения героя"}
                  text={
                    "Персонажи влияют друг на друга: под их воздействием герой может переосмыслить свои цели, измениться или сделать выбор, определяющий финал"
                  }
                />
              </div>
              <div className="module-3__types">
                <h2 className="subtitle">Типы взаимодействий</h2>
                <div className="practice__items">
                  <p className="practice__text">
                    Противостояние (антагонист и протагонист)
                  </p>
                  <p className="practice__text">
                    Противостояние (антагонист и протагонист)
                  </p>
                  <p className="practice__text">
                    Внутренний круг (семья, друзья, наставники)
                  </p>
                </div>
              </div>
              <div className="module-3__last">
                <div className="subtitle">Упражнения по взаимодействию</div>
                <Purpose
                  text={
                    "Напишите диалог двух персонажей с противоположными взглядами"
                  }
                />
                <Purpose
                  text={
                    "Опишите сцену, где второстепенный персонаж влияет на решение главного героя"
                  }
                />
              </div>
            </div>
          </div>

          {/* End Module 3 */}

          {/* Module 4 */}

          <div className="module-4" id="result">
            <div className="container">
              <h2 className="title white">Модуль 4: Итоговая работа</h2>
              <p className="subtitle white">
                Создание портрета персонажа и его роли в истории
              </p>
              <div className="module-4__grid">
                <div className="module-4__item">
                  <h4 className="module-4__item-title">Образ героя</h4>
                  <p className="module-4__item-text">
                    Придумайте персонажа: определите его внешность, характерные
                    черты, желания, страхи и ключевые черты поведения
                  </p>
                </div>
                <div className="module-4__item">
                  <h4 className="module-4__item-title">Биография и цели</h4>
                  <p className="module-4__item-text">
                    Опишите прошлое героя и внутренние мотивы, которые
                    определяют его поступки и решения в истории
                  </p>
                </div>
                <div className="module-4__item">
                  <h4 className="module-4__item-title">Отношения</h4>
                  <p className="module-4__item-text">
                    Покажите, с кем и как взаимодействует герой — союзники,
                    противники, близкие. Как эти связи влияют на его развитие?
                  </p>
                </div>
                <div className="module-4__item">
                  <h4 className="module-4__item-title">Роль в сюжете</h4>
                  <p className="module-4__item-text">
                    Определите функцию персонажа и напишите короткую сцену, где
                    он раскрывается через действие и диалог
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* End Module 4 */}

          {/* Recommendations */}

          <div className="recommendations">
            <div className="container">
              <h2 className="title">Рекомендации для дальнейшего развития</h2>
              <Purpose
                text={
                  "Анализируйте героев в книгах, фильмах и играх: что делает их убедительными"
                }
              />
              <Purpose
                text={
                  'Ведите "галерею персонажей": записывайте интересные типажи и идеи '
                }
              />
              <Purpose
                text={
                  "Пробуйте разных героев в разных жанрах - так вы расширите писательский диапазон"
                }
              />
            </div>
          </div>

          {/* End Recommendations */}

          <AskQuestion type={"black"} />
        </main>
        <Footer />
      </div>
    </>
  )
}
