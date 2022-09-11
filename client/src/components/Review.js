import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { addProductReview ,deleteProductReview} from "../actions/productAction";

export default function Review({ product }) {
  const dispatch = useDispatch();
  const [rating, setrating] = useState(5);
  const [comment, setcomment] = useState("");

  function sendreview() {
    if (localStorage.getItem('currentUser')){
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var alreadyreviewed;

    for (var i = 0; i < product.reviews.length; i++) {
      if (product.reviews[i].userid == currentUser._id) {
        alreadyreviewed = true;
      }
    }
    if (alreadyreviewed) {
      alert("You have already reviewed this product");
    } else {
      const review = {
        rating: rating,
        comment: comment,
      };
      dispatch(addProductReview(review, product._id));
    } 
    }
    else{
     window.location.href = '/login'
    }
  }
  
  return (
    <div className="shadow p-3 mb-5 bg-white rounded me-3 ms-2">
      <h2>Give Your Review</h2>
      <Rating
        initialRating={rating}
        emptySymbol="fa fa-star fa-1x text-info "
        fullSymbol="fa fa-star fa-1x text-warning"
        readonly={false}
        onChange={(e) => {
          setrating(e);
        }}
      /><h1>{rating.length}</h1>
     
      <input
        type="text"
        className="form-control mt-2"
        value={comment}
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      />
      <button className="btn mt-3" onClick={sendreview}>
        Submit Review
      </button>
  <hr/>
      <h2 className="mt-3">Latest Review </h2>
      {product.reviews && product.reviews.map(review => {
          return (
            <div className="text-start mt-2">
              <Rating
                initialRating={review.rating}
                emptySymbol="fa fa-star fa-1x text-info "
                fullSymbol="fa fa-star fa-1x text-warning"
                readonly
              />
              <p className="mt-3">Comment : {review.comment} </p>
              <p className="mt-2">BY : {review.name}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
