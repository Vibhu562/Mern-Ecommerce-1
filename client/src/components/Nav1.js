import React, { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Nav1() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div style={{ color: "black" }}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <ul className="admin p-2">
            <li>
              <Link to="/admin/" style={{ color: "black" }}>
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
              <Link to="/admin/orderslist" style={{ color: "black" }}>
                Add New Order
              </Link>
            </li>
        
          </ul>
          </div>
          </div>
          </div>
  );
}