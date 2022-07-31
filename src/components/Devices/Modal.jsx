import React from "react";
import "./modal.scss";

function MyModal({ handleClose, details, title, image }) {
  return (
    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
      <div className="closeModal" onClick={handleClose}>
        <span>
          <i class="fa-solid fa-circle-xmark"></i>{" "}
        </span>
      </div>

      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h2>Характеристики {title}</h2>
        {details?.map((item, index) => {
          return (
            <div key={index} className="details-item">
              <p className="details-item-label">
                <strong>{item.label}:</strong>
              </p>
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyModal;
