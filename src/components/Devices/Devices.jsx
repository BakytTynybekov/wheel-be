import "./devices.scss";
import { useState } from "react";
import Modal from "./Modal";
import { devicesData } from "./data";
import Device from "./Device";
import { useEffect } from "react";
import { useContext } from "react";
import { GeneralFirestoreContext } from "../../context/GeneralFirestore";

function Devices() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { getAllDevices, allDevices } = useContext(GeneralFirestoreContext);
  useEffect(() => {
    getAllDevices();
    console.log(allDevices);
  }, []);

  return (
    <section id="devices">
      <div className="container">
        <div className="devices">
          <h2>Наши девайсы</h2>
          <h3>Электросамокаты и велосипеды</h3>
          <div className="devices__inner">
            {allDevices?.map(({ data }, index) => (
              <Device key={index} device={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Devices;
