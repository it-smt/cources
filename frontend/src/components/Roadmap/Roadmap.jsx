import "./Roadmap.scss"

export default function Roadmap() {
  const steps = [
    { title: "Выберите курс", text: "dsdsdsd" },
    { title: "Выберите курс", text: "dsdsdsd" },
    { title: "Выберите курс", text: "dsdsdsd" },
    { title: "Выберите курс", text: "dsdsdsd" },
  ]

  return (
    <div className="roadmap">
      <div className="container">
        <h2 className="roadmap__title">За время курса</h2>
        <div className="roadmap__row">
          {steps.map((step, index) => (
            <div className="step-wrapper" key={index}>
              <div className="step">
                <div className="circle">{index + 1}</div>
                {index < steps.length - 1 && <div className="line" />}
              </div>
              <p className="label">
                <p className="title">{step.title}</p>
                <p className="text">{step.text}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
