import { useState } from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";
import { GeneralAuthContext } from "./context/GeneralContext";
import Admin from "./pages/admin/Admin";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route index path="" element={<Orders />} />
          <Route path="addDevice" element={<AddProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
