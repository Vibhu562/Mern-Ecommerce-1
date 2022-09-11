import React from 'react'
import { Link } from "react-router-dom";
export default function Order({order}) {
  return (
    <div>
      <div className="text-center"><img src={order.image} className="img-fluid" alt="" /></div>
      <br/>
      <h1>{order.name}</h1>
      <br/>    
           <h1>Price: ₹{order.price}</h1>
  </div>
  );
}
