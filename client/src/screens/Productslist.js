import React from "react";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";

import { getAllProducts , deleteProduct } from '../actions/productAction'
import Nav1 from "../components/Nav1";

export default function Productslist() {
  const dispatch = useDispatch();
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  )
  const { products, loading, error } = getallproductsstate;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  return (
    <div className="table-responsive-sm me-3 ms-2 card text-center shadow p-3 mb-5 bg-white rounded">
      <Nav1/>
      <h2>Products list</h2>

      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Id</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading && <Loader />}
          {error && <Error error="something went wrong" />}
          {products &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.countInStock}</td>
                  <td>{product._id}</td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteProduct(product._id))}}
                    ></i>
                    <Link to={`/admin/editproduct/${product._id}`}><i className="fas fa-edit"></i></Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
