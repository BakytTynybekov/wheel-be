import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GeneralFirestoreContext } from "../../context/GeneralFirestore";
import "./orders.scss";
import { useState } from "react";
import OrderModal from "./OrderModal";
import Select from "react-select";

const options = [
  { value: "active", label: "Активные" },
  { value: "successfull", label: "Успешные" },
  { value: "under question", label: "Под вопросом" },
  { value: "unsuccessful", label: "Неуспешные" },
];

function Orders() {
  const [state, setState] = useState(false);
  const [status, setStatus] = useState([""]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: "active",
    label: "Активные",
  });
  const { getAllOrders, allOrders, deleteOrder } = useContext(
    GeneralFirestoreContext
  );

  const getFilteredOrders = () => {
    const filteredOrderss = allOrders.filter(
      ({ data }) => data.status === selectedOption.value
    );
    setFilteredOrders(filteredOrderss);
  };

  useEffect(() => {
    getFilteredOrders();
  }, [selectedOption]);

  useEffect(() => {
    getAllOrders();
  }, []);

  const handleChangeStatus = (status) => {
    setStatus([status]);
    setState(true);
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="ordersPage">
      <h1>Заказы</h1>
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
      <div className="orders">
        {filteredOrders?.map(({ data, id }) => {
          return (
            <div key={id} className="orders-item">
              <p>
                <strong>Имя Заказчика:</strong> <span>{data.name}</span>
              </p>
              <p>
                <strong>Номер телефона:</strong>
                <span>{data.number}</span>
              </p>
              <p>
                <strong>Что клиент заказал:</strong>
                <span>{data.device}</span>
              </p>
              <p>
                <strong>Когда заказал:</strong>
                <span>{data.time}</span>
              </p>
              <p>
                <strong>Как клиент хочет получить свой заказ:</strong>
                <span>{data.polucheniye}</span>
              </p>
              <p>
                <strong>Как связаться с клиентом:</strong>
                <span>{data.call}</span>
              </p>

              {selectedOption.value !== "active" &&
                selectedOption.value !== "successfull" && (
                  <div className="ordersExtra">
                    <div className="ordersExtra-info">
                      <h3>Причина</h3>
                      <p> {data.reason} </p>
                    </div>
                    <button
                      onClick={() => deleteOrder(id)}
                      className="ordersExtra-btn"
                    >
                      Удалить
                    </button>
                  </div>
                )}

              {selectedOption.value === "successfull" && (
                <div className="ordersExtra">
                  <div className="ordersExtra-infoOk">
                    <h3>Когда девайс доставлен?</h3>
                    <p>{data.dostavkaDate}</p>
                    <h3>До какого числа?</h3>
                    <p>{data.expirationDate}</p>
                  </div>
                  <button
                    onClick={() => deleteOrder(id)}
                    className="ordersExtra-btn"
                  >
                    Удалить
                  </button>
                </div>
              )}

              <div className="orders-btn">
                <button>
                  <span
                    className="ok"
                    onClick={() => handleChangeStatus("successfull")}
                  >
                    <i class="fa-solid fa-circle-check"></i>
                  </span>
                </button>
                <button>
                  <span
                    onClick={() => handleChangeStatus("under question")}
                    className="wait"
                  >
                    <i class="fa-solid fa-circle-question"></i>{" "}
                  </span>
                </button>
                <button>
                  <span
                    onClick={() => handleChangeStatus("unsuccessful")}
                    className="x"
                  >
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </button>
                {state && (
                  <OrderModal
                    setState={setState}
                    data={data}
                    id={id}
                    status={status[0]}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
