import { getAllProductsReducer,getProductByIdReducer,addProductReviewReducer,deleteProductReducer,addProductReducer, updateProductReducer} from "./reducers/productReducer";
import {combineReducers }from 'redux';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getOrdersByUserIdReducer,getAllOrdersReducer,placeOrderReducer, getOrderByIdReducer} from './reducers/orderReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';
import {registerNewUserReducer} from './reducers/userReducer'
import {loginReducer  ,updateReducer , getAllUsersReducer, deleteUserReducer} from './reducers/userReducer'
const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer ,
    placeOrderReducer:placeOrderReducer,
    getProductByIdReducer : getProductByIdReducer ,
    cartReducer : cartReducer ,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer ,
    addProductReviewReducer : addProductReviewReducer,  
    updateReducer : updateReducer,
    getAllUsersReducer : getAllUsersReducer,
    deleteUserReducer : deleteUserReducer,
    deleteProductReducer : deleteProductReducer,
    addProductReducer: addProductReducer,
    updateProductReducer : updateProductReducer,
    getOrdersByUserIdReducer:getOrdersByUserIdReducer,
    getOrderByIdReducer : getOrderByIdReducer,
    getAllOrdersReducer:getAllOrdersReducer,
  })

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : []

const initialState = {
  cartReducer : {cartItems : cartItems},
  loginReducer : {currentUser : currentUser}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(finalReducer , initialState, composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))
 export default store 