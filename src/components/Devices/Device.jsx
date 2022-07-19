import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormModal from "./FormModal";
import Modal from "./Modal";
import "./modal.scss";

function Device({ device }) {
  const [detailsModal, setDetailsModal] = useState(false);
  const [formModal, setFormModal] = useState(false);

  useEffect(() => {
    if (detailsModal || formModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div className="devices-item">
      <h4 className="devices-item-title">{device.title}</h4>
      <div className="devices-item-img">
        <img src={device.img} alt="" />
      </div>
      <div className="price">
        Стоимость аренды <br /> + 490₽ тариф "Защита"
      </div>
      <div className="devices-item-prices">
        <div className="devices-item-price">
          <span>1 месяц</span>
          <strong>{device.oneMonth}₽ / месяц</strong>
        </div>
        <div className="devices-item-price">
          <span>3 месяц</span>
          <strong>{device.threeMonth}₽ / месяц</strong>
        </div>
      </div>
      <div className="devices-item-order">
        <button className="order" onClick={() => setFormModal(!formModal)}>
          Забронировать
        </button>
        <button
          className="more-details"
          onClick={() => setDetailsModal(!detailsModal)}
        >
          <span>
            <i class="fa-solid fa-gear"></i>
          </span>
        </button>
        {detailsModal && (
          <div className="detailsModal" onClick={() => setDetailsModal(false)}>
            <Modal
              detailsModal={detailsModal}
              setDetailsModal={setDetailsModal}
              details={device.details}
              image={device.img}
              title={device.title}
            />
          </div>
        )}
        {formModal && (
          <div onClick={() => setFormModal(false)} className="formModal">
            <FormModal setFormModal={setFormModal} device={device} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Device;
