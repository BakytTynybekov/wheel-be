import "./question.scss";
import Select from "react-select";
import { useState } from "react";
import { questions } from "./data";
import Question from "./Question";
import Fade from "react-reveal/Fade";

const options = [
  { value: "podpiska", label: "Подписка" },
  { value: "devices", label: "Девайсы" },
  { value: "dostavka", label: "Доставка" },
  { value: "vozvrat", label: "Возврат" },
  { value: "service", label: "Обслуживание" },
  { value: "prochee", label: "Прочее" },
];

function Questions() {
  const [selectedOption, setSelectedOption] = useState({
    value: "podpiska",
    label: "Подписка",
  });
  const [qty, setQty] = useState([3]);

  const handleChange = () => {
    if (qty[0] === 3) {
      setQty([questions[selectedOption.value].length]);
    } else {
      setQty([3]);
    }
  };

  return (
    <section id="questions">
      <div className="container">
        <div className="questions__inner">
          <h2>Вопросы и ответы</h2>
          <div className="tabs-mobile">
            <Select
              className="aaa"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
          <div className="tabs">
            {options.map((tab, index) => {
              return (
                <button
                  className={
                    tab.value === selectedOption.value
                      ? "tabs-btn active-btn"
                      : "tabs-btn"
                  }
                  onClick={() =>
                    setSelectedOption({ value: tab.value, label: tab.label })
                  }
                  data-cat={tab.value}
                  key={index}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="panels">
            {questions[selectedOption.value]
              ?.slice(0, qty[0])
              .map((panel, index) => {
                return (
                  <Fade bottom>
                    <Question key={index} panel={panel} />
                  </Fade>
                );
              })}

            {questions[selectedOption.value].length > 3 && (
              <button onClick={() => handleChange()} className="panels-btn">
                {qty[0] === 3 ? "Показать еще" : "Скрыть"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
