import React,{useEffect, useRef} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch , useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions';
import Loader from "./Loader";
import Success from "./Success";
import Error from "./Error";
export default function Paypal({amount}) {

  const dispatch = useDispatch()
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducerstate;
  const orderstate = useSelector(state=>state.placeOrderReducer) 

  const getproductbyidstate = useSelector( (state) => state.getProductByIdReducer);
  const { product ,loading , success , error} = getproductbyidstate;
  var subtotal = cartItems.reduce((acc, item) => acc + (item.discount * item.quantity) , 0)
    function tokenHandler(token){
    
           
    }

    function validate(){
      if (!localStorage.getItem('currentUser')){
       window.location.href = '/login'
      }
    }
 
  const paypal = useRef()
  useEffect(()=>{
      window.paypal.Buttons({
   createOrder : (data , actions ,err) =>{
     return actions.order.create({
      intent: "CAPTURE",
      purchase_units : [{
          description : cartItems.name,
          amount :{
            currency_code :"USD" ,
            value : subtotal
          },
      },
    ] ,
     });
   },
    onApprove: async (data,actions) =>{
      const order = await actions.order.capture();
      console.log(order)
      console.log('successfull')
      console.log(data.orderID)
    },
     onError : (err)=>{
      console.log(err)
     }
      })
      .render(paypal.current)
  },[])
  return (
    <div>
      {loading && (<Loader/>)}
      {success && (<Success success = "your order is placed successfully"/>)}
      {error && (<Error error = "Something Went Wrong"/>)}
        
      <div  token = {tokenHandler} ref = {paypal} ></div> 

    </div>
  )
}
