import React from "react";
import { useState } from "react";
import { dataForWhom } from "./dataForWhom";
import "./for-whom.scss";
import "../Questions/question.scss";

const options = [
  { value: "electroSamokaty", label: "Электросамокаты" },
  { value: "bicycle", label: "Велосипеды" },
];
function ForWhom() {
  const [selectedOption, setSelectedOption] = useState({
    value: "electroSamokaty",
    label: "Электросамокаты",
  });
  return (
    <section className="forWhom">
      <div className="container">
        <div className="forWhom__inner">
          <h2>Кому подходят девайсы в аренду?</h2>
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

          <div className="forWhom__panels">
            {dataForWhom[selectedOption.value]?.map((panel, index) => (
              <div className="forWhom__panels-item">
                <div className="forWhom__panels-item-img">
                  <img src={panel.img} alt="" />
                </div>
                <div className="forWhom__panels-item-info">
                  <h3>{panel.title}</h3>
                  <p>{panel.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForWhom;
