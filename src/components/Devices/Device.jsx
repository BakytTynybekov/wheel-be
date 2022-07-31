import { Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import FormModal from "./FormModal";
import MyModal from "./Modal";

import "./modal.scss";

function Device({ device }) {
  const [detailsModal, setDetailsModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseDetailsModal = () => setDetailsModal(false);
  const handleOpenDetailsModal = () => setDetailsModal(true);

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
        <button className="order" onClick={handleOpen}>
          Забронировать
        </button>
        <button className="more-details" onClick={handleOpenDetailsModal}>
          <span>
            <i class="fa-solid fa-gear"></i>
          </span>
        </button>
        <div className="modal-container">
          <Modal
            className="detailsModal"
            open={detailsModal}
            onClose={handleCloseDetailsModal}
          >
            <MyModal
              handleClose={handleCloseDetailsModal}
              details={device.details}
              image={device.img}
              title={device.title}
            />
          </Modal>

          <Modal open={open} onClose={handleClose} className="formModal">
            <FormModal setFormModal={handleClose} device={device} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Device;
