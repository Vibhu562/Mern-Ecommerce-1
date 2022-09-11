import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../actions/productAction";
import { addToCart } from "../actions/cartActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from "../components/Review";
import Footer from "../components/Footer";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css' 

export default function Productdescscreen() {
  let { id } = useParams();
  const dispatch = useDispatch()
  const[quantity , setquantity ] = useState(1)
  const getproductbyidstate = useSelector( (state) => state.getProductByIdReducer);
  const { product, loading, error } = getproductbyidstate;
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  

  function addtocart(){
    dispatch(addToCart(product , quantity,currentUser),)
    if (localStorage.getItem('currentUser')){
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      alert("You have added "+ product.name +" successfully to cart")

       
    }
    else{
      alert("Please Login to view your cart")
        window.location.href = '/login'
       }
 
  }


  useEffect(() => {
    dispatch(getProductById(id));
  }, []);


  return (
    <div>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Error error='Something Went Wrong' />
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card p-2 m-2 shadow p-3 mb-5 bg-white rounded">
              <h1 style={{fontSize: '20px'}}><b>{product.name}</b></h1>
            <div className="img-wrapper">
            <Zoom>
            <img
                src={product.image}
                className="img-fluid m-3 bigimg"
                alt=""   /> 
            </Zoom>
            <div className="justify-content-center">Click on image to zoom in </div>
            </div>
            <h1 className="mt-4"><b>About this item</b></h1>
             <ul style ={{color : "black"}}><li> <p>{product.description}{"\n"}</p></li>
             <li>  <p>{product.description1}{"\n"}</p> </li></ul>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <div className="m-2 shadow p-3 mb-5 bg-white rounded">
              <h1><b>MRP : <s>₹{parseFloat(product.price).toFixed(2)}</s></b></h1>
              <h1>Deal Price : ₹  {parseFloat(product.discount).toFixed(2)}</h1>
              <h1>You Save : ₹{parseFloat(product.price-product.discount).toFixed(2)} ({parseInt(parseFloat((product.price-product.discount)).toFixed(2)*100/parseFloat((product.price)).toFixed(2))}%)
              </h1>
             
              <hr />
              <h1>Select Quantity</h1>
              <select value = {quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              
              {product.countInStock > 0 ? ( <button className="btn btn-dark" onClick={addtocart}>ADD to CART</button>):
              (<div><h1>Out of Stock</h1><button className="btn btn-dark"  disabled  onClick={addtocart}>ADD to CART</button></div>)}
             
            </div>
            <hr/>
            <Review  product={product}/>
          </div>
        </div>
      )}
    </div>
  );
}
