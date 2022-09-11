import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import ReactStars from "react-rating-stars-component";

export default function Product({ product }) {
  return (
      <div>
        <Link to={`product/${product._id}`}>
          <div className="text-center"><img src={product.image} className="img-fluid" alt="" /></div>
          <br/>
          <h1>{product.name}</h1>
          <br/>
          <Rating
          initialRating={product.rating}
          emptySymbol="fa fa-star fa-1x text-info "
          fullSymbol="fa fa-star fa-1x text-warning"
          readonly={true} />
          <br/><br/>
               <h1>Price: ₹{product.price}</h1>
        </Link>
      </div>
  );
}
