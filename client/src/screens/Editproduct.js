import React from 'react'
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
export default function Editproduct() {
  const { id } = useParams();
  const productstate = useSelector((state) => state.getProductByIdReducer);
  const { product, error, loading } = productstate;
  const updateproductstate = useSelector((state) =>state.updateProductReducer)

  const {success , updateerror , updateloading} = updateproductstate

  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [discount, setdiscount] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [description1, setdescription1] = useState("");
  
  useEffect(() => {
    if (product) {
      if (product._id == id) {
        setname(product.name);
        setprice(product.price);
        setdiscount(product.discount);
        setdescription(product.description);
        setdescription1(product.description1);
        setimageurl(product.image);
        setcategory(product.category);
        setcountinstock(product.countInStock);
      } else {
        dispatch(getProductById(id));
      }
    } else {
      dispatch(getProductById(id));
    }
  }, [dispatch, product]);

  function editproduct(e) {
    e.preventDefault();
    const updatedproduct = {
      name: name,
      price: price,
      discount: discount,
      description: description,
      description1: description1,
      countInStock: countinstock,
      category: category,
      image: imageurl,
    };
    dispatch(updateProduct(id, updatedproduct));
   
  }
  return (
    
    <div>
     <h2>Edit Product</h2>
     {loading && <Loader />}
     {updateloading && <Loader />}
    {updateerror && (<Error error='Something went wrong' />)}
     {success && (<Success success='Product Updated Successfully'/>)}
      {error && <Error error="something went wrong" />}
     {product && (
        <div>
          <form onSubmit={editproduct}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="price"
              value={price}
              required
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="discount"
              value={discount}
              required
              onChange={(e) => {
                setdiscount(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="decription"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
             <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="decription1"
              value={description1}
              onChange={(e) => {
                setdescription1(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="imageurl"
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="count in stock"
              value={countinstock}
              onChange={(e) => {
                setcountinstock(e.target.value);
              }}
            />
            <h1></h1>
            <button
              className="btn mt-5 mb-n2
 "
              type="submit"
              style={{ float: "left" }}
            >
              Edit Product
            </button>
          
          </form>

        </div>
      )}
      
    </div>
  )
}
