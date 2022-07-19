import React, { useContext } from "react";
import { useState } from "react";
import { GeneralFirestoreContext } from "../../context/GeneralFirestore";
import moment from "moment";

import "./orders.scss";

function OrderModal({ status, setState, data, id }) {
  const [xForm, setXForm] = useState({
    status: "",
    reason: "",
  });
  const [okForm, setOkForm] = useState({
    status: "successfull",
    dostavkaDay: null,
    duration: null,
  });

  const { updateOrder } = useContext(GeneralFirestoreContext);

  const handleOkSubmit = (e, newData) => {
    e.preventDefault();
    const data = {
      status: newData.status,
      dostavkaDate: moment(new Date())
        .add(+newData.dostavkaDay, "days")
        .toDate()
        .toLocaleString("ru", { timeZone: "UTC" }),
      expirationDate: moment(new Date())
        .add(+newData.duration + +newData.dostavkaDay, "days")
        .toDate()
        .toLocaleString("ru", { timeZone: "UTC" }),
    };
    console.log(data);
    updateOrder(data, id, data);
    setState(false);
  };

  const handleXSubmit = (e, newData) => {
    e.preventDefault();

    const data = { status: newData.status, reason: newData.reason };
    updateOrder(data, id, data);
    setState(false);
  };

  return (
    <div className="statusModal" onClick={() => setState(false)}>
      <div className="statusModal__inner" onClick={(e) => e.stopPropagation()}>
        <h1>Отчет</h1>
        {status === "unsuccessful" || status === "under question" ? (
          <form onSubmit={(e) => handleXSubmit(e, xForm)} action="">
            <label htmlFor="">Что клиент сказал?</label>
            <textarea
              required
              value={xForm.reason}
              onChange={(e) =>
                setXForm({ ...xForm, reason: e.target.value, status: status })
              }
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Напишите причину"
            ></textarea>
            <button className="statusModal-btn">Потвердить</button>
          </form>
        ) : (
          <form onSubmit={(e) => handleOkSubmit(e, okForm)}>
            <div>
              <label htmlFor="">Через сколько дней доставка?</label>
              <input
                required
                type="number"
                placeholder="1"
                value={okForm.dostavkaDay}
                onChange={(e) =>
                  setOkForm({ ...okForm, dostavkaDay: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">На какой срок (количество дней)?</label>
              <input
                required
                value={okForm.duration}
                onChange={(e) =>
                  setOkForm({ ...okForm, duration: e.target.value })
                }
                type="number"
                placeholder="90"
              />
            </div>
            <button className="statusModal-btn">Потвердить</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default OrderModal;
