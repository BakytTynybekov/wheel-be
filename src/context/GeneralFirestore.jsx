import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { useState } from "react";
import { createContext } from "react";
import * as fireStoreApp from "../firebase/firebase";

export const GeneralFirestoreContext = createContext();

const refCollectionOrders = collection(fireStoreApp.fireStore, "orders");
const refcollection = collection(fireStoreApp.fireStore, "products");

export const GeneralFirestoreProvider = ({ children }) => {
  const [allOrders, setAllOrders] = useState([]);
  const [allDevices, setAllDevices] = useState([]);
  const addDevice = async (device) => {
    await addDoc(refcollection, device);
  };

  const getAllDevices = async () => {
    const devices = await getDocs(refcollection);
    setAllDevices(
      devices.docs.map((device) => ({
        data: device.data(),
        id: device.id,
      }))
    );
  };

  const saveOrder = async (userData) => {
    addDoc(refCollectionOrders, { ...userData });
  };

  const getAllOrders = async () => {
    const orders = await getDocs(refCollectionOrders);
    setAllOrders(
      orders.docs.map((order) => ({
        data: order.data(),
        id: order.id,
      }))
    );
  };

  // onSnapshot(doc(fireStoreApp.fireStore, "orders", "name"), (doc) => {
  //   getAllOrders();
  // });

  const updateOrder = (data, id, newData) => {
    const refToDoc = doc(fireStoreApp.fireStore, "orders", id);
    updateDoc(refToDoc, { ...data, ...newData });
  };

  const deleteOrder = async (id) => {
    await deleteDoc(doc(fireStoreApp.fireStore, "orders", id));
  };
  const data = {
    saveOrder: saveOrder,
    getAllOrders: getAllOrders,
    allOrders: allOrders,
    addDevice: addDevice,
    getAllDevices: getAllDevices,
    allDevices: allDevices,
    updateOrder: updateOrder,
    deleteOrder: deleteOrder,
  };
  return (
    <GeneralFirestoreContext.Provider value={data}>
      {children}
    </GeneralFirestoreContext.Provider>
  );
};
