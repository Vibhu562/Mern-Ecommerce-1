import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productAction";

export default function Filter() {

  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch()
  return (
    <div className="responsive-sm">
      <div className="row justify-content-center ">
        <div className="col-md-3 ms-2"  style={{marginTop:'15px'}}>
          <input
           value={searchkey}
           onChange={(e) => {
             setsearchkey(e.target.value);
           }}
            type="text"
            placeholder="Search Products By Name"
            className="form-control"
          />
        </div >
        <div className="col-md-2 mt-4 ms-2 pt-0.5 " >
          <select  className="form-control" value ={sort} onChange={(e)=>{setsort(e.target.value)}}>
            <option value="Popular">Popular</option>
            <option value="htl">high to Low</option>
            <option value="lth">Low To High</option>
          </select>
        </div>
        <div className="col-md-2 mt-4 ms-2 pt-0.1">
          <select  className="form-control " value={category} onChange={(e)=>setcategory(e.target.value)}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>
        <div className="col-md-2 mt-4 ms-2">
          <button className="btn" onClick={()=>{dispatch(filterProducts(searchkey , sort , category))}}>Filter</button>
        </div>
      </div>
    </div>
  );
}
