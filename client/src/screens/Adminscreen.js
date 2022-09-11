import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "../actions/productAction";
import { getAllUsers } from "../actions/userActions";
import { PieChart } from 'react-minimal-pie-chart';
import Productslist from "./Productslist";
import { Routes,Route} from 'react-router-dom';

import Addproduct from "./Addproduct";
import Orderslist from "./Orderslist";
import Userslist from "./Userslist";
export default function Adminscreen() {
  const dispatch = useDispatch();
  const getallusersstate = useSelector((state) => state.getAllUsersReducer);
  const { users } = getallusersstate;
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducerstate;
  
  var subtotal = cartItems.reduce(
    (acc, item) => acc + item.discount * item.quantity,
    0
  );
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  var today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [value, onChange] = useState(new Date());

  return (
    <div style={{ color: "black" }}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <ul className="admin p-2">
            <li>
              <Link to="/admin/" style={{ color: "black" }} disabled>
                Users list
              </Link>
            </li>
            <li>
              <Link to="/admin/productslist" style={{ color: "black" }}>
                Products list
              </Link>
            </li>
            <li>
              <Link to="/admin/addnewproduct" style={{ color: "black" }}>
                Add New Product
              </Link>
            </li>
            <li>
              <Link to="/admin/orderlist" style={{ color: "black" }}>
                Orders list
              </Link>
            </li>
          </ul>
          <Routes>
          <Route path="/" element={<Userslist/>} exact/>
          <Route path= '/admin/productslist'  element ={<Productslist/>}  exact/>
      <Route path= '/admin/addnewproduct'  element ={<Addproduct/>} exact />
      <Route path= '/admin/orderlist'  element ={<Orderslist/>}  exact/>
          </Routes>
          <div></div>
        </div>
      </div>
    </div>
  );
}
