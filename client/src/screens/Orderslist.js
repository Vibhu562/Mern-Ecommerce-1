import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { getAllOrders } from '../actions/orderActions'
import { deleteOrder } from '../actions/orderActions'
import Nav1 from '../components/Nav1'
export default function Orderslist() {

    const getordersstate = useSelector(state => state.getAllOrdersReducer)

    const {loading , error , orders} = getordersstate
    const dispatch = useDispatch()

    useEffect(() => {

       dispatch(getAllOrders())
        
    }, [])

    return (
        <div>
            {loading && (<Loader/>)}
            <Nav1/>
            {error && (<Error error='something went wrong'/>)}
            <h2>Orders List</h2>
            <table className='table table-bordered table-responsive-sm'>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Transaction Id</th>
                        <th>Delete</th>
                    </tr>
                    </thead>

                    <tbody>
                        {orders && (orders.map(order=>{
                            return <tr onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>
                                <td>{order._id}</td>
                                <td>{order.email}</td>
                                <td>{order.userid}</td>
                                <td>{order.orderAmount}</td>
                                <td>{order.createdAt}</td>
                                <td>{order.transactionId}</td>
                                {order.isDelivered == true ? (
                                     <i
                                     className="far fa-trash-alt"
                                     style={{ marginRight: "10px" }} onClick={()=>{dispatch(deleteOrder(order._id))}}
                                   ></i>
                                ) :(<div></div>)}
                            </tr>
                        }))}
                    </tbody>
               
            </table>

        </div>
    )
}