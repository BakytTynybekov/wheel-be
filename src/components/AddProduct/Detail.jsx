import React from "react";

function Detail({ values, setValues, index }) {
  const handleLabelChange = (e) => {
    let newDetails = [
      ...values.details,
      (values.details[index].label = e.target.value),
    ];

    setValues({ ...values, details: newDetails.slice(0, 9) });
  };

  const handleValueChange = (e) => {
    let newDetails = [
      ...values.details,
      (values.details[index].value = e.target.value),
    ];

    setValues({ ...values, details: newDetails.slice(0, 9) });
  };
  return (
    <div className="detail">
      <p className="number">{index + 1}:</p>
      <p className="detail-name">
        <label htmlFor="">Название</label>
        <input
          required
          value={values.details[index]?.label}
          onChange={(e) => handleLabelChange(e)}
          type="text"
          placeholder="Например вес"
        />
      </p>
      <p className="detail-value">
        <label htmlFor="">Значение</label>
        <input
          required
          value={values.details[index]?.value}
          onChange={(e) => handleValueChange(e)}
          type="text"
          placeholder="5 кг"
        />
      </p>
    </div>
  );
}

export default Detail;
