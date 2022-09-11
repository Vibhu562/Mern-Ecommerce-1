import React from "react";
import Product from "../components/Product";
import axios from 'axios';
import { useEffect , useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Homescreen() {

  const getallproductsstate = useSelector(state=>state.getAllProductsReducer)
  const {loading , products ,error} =  getallproductsstate
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getAllProducts())
  }, [])

 
  return (
    <div>
      <Filter />
      <div className="row justify-content-center mt-5 ms-2 me-2">
     {loading ? (
     <Loader/>
     ) : error ? (
     <Error error='Something Went Wrong'/>
     ) : (
     products.map(product=> {
      return <div className="col-md-3 m-2 p-2 shadow p-3 mb-5 bg-white rounded card">
        <Product product={product}/>
        </div>
     })
     )}        
      </div>
      </div>
     
  );
}
