// Add to Cart 
export const addToCart=(product , quantity)=>(dispatch , getState)=>{
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const cartItem = {
      currentUser : currentUser.name,
      name : product.name , 
      _id : product._id ,
      price : product.price ,
      discount : product.discount,      
      countInStock : product.countInStock , 
      quantity : quantity

    }

    dispatch({type : 'ADD_TO_CART' , payload : cartItem})

    localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))

}

//Delete From Cart
export const deleteFromCart=(item)=>(dispatch , getState)=>{

     dispatch({type:'DELETE_FROM_CART' , payload:item})
     localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))

}