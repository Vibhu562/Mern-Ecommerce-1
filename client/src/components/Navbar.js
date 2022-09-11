import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const EMPTY_CART = { cartItems: [] }
  const cartreducer = useSelector((state) => state.cartReducer || EMPTY_CART);
  const { cartItems } = cartreducer
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch()
  // this_is_an_example is the key against translation in locales/en/translation.json file.
  
  return (
    <div>
    
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          Product
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i class ="fas fa-bars" style ={{color: "white"}}></i></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
           {currentUser ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 <i style = {{color: "white"}}className="fa fa-user"></i> {currentUser.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  {currentUser._id == '62ebdf40e7d9ffa73fb7d753' ?(<a className="dropdown-item" href="/admin">
                    Admin 
                  </a>) : (<a className="dropdown-item" >
                    You are not Admin 
                  </a>)}
                  
                  <li className="dropdown-item"  onClick={()=>{dispatch(logoutUser())}}>
                    Logout<i className="fas fa-sign-out-alt ms-2"></i>
                  </li>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link " href="/cart">
                <i class="fas fa-shopping-cart"></i> {cartItems.length}   
              
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
