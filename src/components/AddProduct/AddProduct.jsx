import { useContext } from "react";
import { useState } from "react";
import { GeneralFirestoreContext } from "../../context/GeneralFirestore";
import "./add-product.scss";
import Detail from "./Detail";

const initialValue = {
  title: "",
  type: "",
  extraInfo: "",
  img: "",
  oneMonth: "",
  threeMonth: "",
  details: [
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
  ],
};
function AddProduct() {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [values, setValues] = useState(initialValue);

  const { addDevice } = useContext(GeneralFirestoreContext);

  const handleSubmit = (e) => {
    e.preventDefault(e);

    addDevice(values);
  };

  return (
    <div className="addProductsPage">
      <h1>Добавить девайс </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="">Тип девайса</label>
          <input
            required
            value={values.type}
            onChange={(e) => setValues({ ...values, type: e.target.value })}
            type="text"
            placeholder="Велосипед"
          />
        </p>
        <p>
          <label htmlFor="">Название девайса</label>
          <input
            required
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            type="text"
            placeholder="Название девайса"
          />
        </p>
        <p>
          <label htmlFor="">Дополнительная информация</label>
          <input
            value={values.extraInfo}
            onChange={(e) =>
              setValues({ ...values, extraInfo: e.target.value })
            }
            type="text"
            placeholder="Идеален для города..."
          />
        </p>
        <p>
          <label htmlFor="">Ссылка на фото</label>
          <input
            required
            value={values.img}
            onChange={(e) => setValues({ ...values, img: e.target.value })}
            type="text"
            placeholder="https://-------.jpg(png)..."
          />
        </p>
        <p>
          <label htmlFor="">Стоимость аренды за месяц</label>
          <input
            required
            value={values.oneMonth}
            onChange={(e) => setValues({ ...values, oneMonth: e.target.value })}
            type="text"
            placeholder="3600"
          />
        </p>
        <p>
          <label htmlFor="">Стоимость аренды за 3 месяца</label>
          <input
            required
            value={values.threeMonth}
            onChange={(e) =>
              setValues({ ...values, threeMonth: e.target.value })
            }
            type="text"
            placeholder="2900"
          />
        </p>
        <div className="detailsToAdd">
          <h2>Добавить характеристику в девайс</h2>
          {count.map((item, index) => {
            return (
              <Detail
                key={index}
                index={index}
                values={values}
                setValues={setValues}
              />
            );
          })}
        </div>
        <button type="submit">Добавить девайс</button>
      </form>
    </div>
  );
}

export default AddProduct;
