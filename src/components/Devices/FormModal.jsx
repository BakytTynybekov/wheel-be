import { Formik } from "formik";
import moment from "moment";
import { useContext } from "react";
import * as yup from "yup";
import { GeneralFirestoreContext } from "../../context/GeneralFirestore";
import "./form-modal.scss";

function FormModal({ device, setFormModal }) {
  const { saveOrder } = useContext(GeneralFirestoreContext);

  const validationsSchema = yup.object().shape({
    name: yup.string().typeError("").required("Обязательное поле"),
    number: yup
      .number()
      .typeError("Только число")
      .required("Обязательное поле"),
  });

  const initialValue = {
    name: "",
    number: "",
    device: device.title,
    promokod: "",
    polucheniye: "Самовывоз",
    call: "Zvonok",
  };

  const onSubmit = (values) => {
    saveOrder({ ...values, status: "active", time: moment().format("LLLL") });
    setFormModal(false);
  };

  return (
    <div className="formModal__content" onClick={(e) => e.stopPropagation()}>
      <h1 className="formModal-title">Оформить подписку</h1>
      <span className="closeFormModal" onClick={() => setFormModal(false)}>
        <i class="fa-solid fa-circle-xmark"></i>{" "}
      </span>
      <Formik
        initialValues={initialValue}
        validateOnBlur
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className="form">
            <div>
              <input
                name={"name"}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Ваше имя"
              />
              {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                name={"number"}
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="number"
                placeholder="+7 923 ХХХ ХХ ХХ"
              />
              {touched.number && errors.number && (
                <p className="error">{errors.number}</p>
              )}
            </div>

            <div>
              <label>{device.type}</label>
              <input defaultValue={values.device} />
            </div>
            <div>
              <label>Введите промокод (если есть)</label>
              <input
                name={"promokod"}
                value={values.promokod}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="">Способ получения</label>
              <select
                name={"polucheniye"}
                value={values.polucheniye}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="samovyvoz">Самовывоз (бесплатно)</option>
                <option value="dostavka">Доставка (бесплатно)</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Удобный способ связи</label>
              <select
                name={"call"}
                value={values.call}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="zvonok">Звонок</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            <button type="submit" onClick={handleSubmit}>
              Оформить
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormModal;
