import React , {useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { registerNewUser } from '../actions/userActions'
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from '../components/Success';
export default function Registerscreen() {

    const registerstate = useSelector(state=>state.registerNewUserReducer)
    const {loading , error,success} = registerstate

    const[name , setname] = useState("")
    const[email , setemail] = useState("")
    const[Address , setaddress] = useState("")
    const[phonenumber , setphonenumber] = useState("")
    const[password , setpassword] = useState("")
    const[cpassword , setcpassword] = useState("")

    const dispatch= useDispatch()
    function register(e) {  
    e.preventDefault()
        const user = {
            
            name : name ,
            email : email ,
            Address : Address,
            phonenumber : phonenumber,
            password : password 
    
        }
        if (password==cpassword && phonenumber.length == 10){
            dispatch(registerNewUser(user))
        }
        else{
            alert("Password Not Match or phone number not 10 digit ");
        }
    }
    
 


  return (
   <div>
   <div className='row justify-content-center m-3'>
   <div className='col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded' style={{marginTop: '100px'}}>
        <div className='div' onSubmit={register}>
            <h2 className='text-center m-3'style={{display: 'inline'}}>Register</h2>
            <i className='fa fa-user-plus'></i>
            {error && (<Error error="Email Id Already Registered" />)}
            {loading && (<Loader />)}
            {success && (<Success success='Your Registration is Successful'/>)}
            <form>
            <input type = "text" placeholder='name' className='form-control' value = {name} required onChange = {(e)=>{setname(e.target.value)}} />
            <input type = "text" placeholder='email' className='form-control' value = {email} required onChange = {(e)=>{setemail(e.target.value)}} />
            <input type = "text" placeholder='Address' className='form-control' value = {Address} required onChange = {(e)=>{setaddress(e.target.value)}} />
            <input type = "number" placeholder='phonenumber' className='form-control' value = {phonenumber} required onChange = {(e)=>{setphonenumber(e.target.value)}} />
            <input type = "password" placeholder='password' className='form-control' value = {password} required onChange = {(e)=>{setpassword(e.target.value)}} />
            <input type = "password" placeholder='confirm password' className='form-control' value = {cpassword} required onChange = {(e)=>{setcpassword(e.target.value)}} />
            <div className='text-end'>
                <button type = 'submit' className='btn mt-3' >Register</button>
            </div></form>
            
        </div>
        <a style= {{color:'black'}} href='/login ' className='m-3'>Click Here to Login</a>
      </div>
     </div>
     
   </div>
   
  )
}
