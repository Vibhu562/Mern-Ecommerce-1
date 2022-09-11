import React , {useState , useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Loader from "../components/Loader";
import Error from "../components/Error";
import Footer from '../components/Footer';
export default function Loginscreen() {

    const loginreducer = useSelector(state=>state.loginReducer)
    const {loading , error} = loginreducer
    const[email , setemail] = useState("")
    const[password , setpassword] = useState("")

    const dispatch= useDispatch()
    function login(e) {  
    e.preventDefault()
        const user = {
            
            email : email ,
            password : password 
    
        }
        dispatch(loginUser(user))
    }
    
 useEffect(() => {
   
    if(localStorage.getItem('currentUser')){
        window.location.href = '/'
    }
 }, [])
  return (
   <div>
   <div className='row justify-content-center m-3'>
   <div className='col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded' style={{marginTop: '100px'}}>
        <div className='div' onSubmit={login}>
            <h2 className='text-center m-3' style={{display: 'inline'}}>Login</h2><i className='fa fa-sign-in'></i>
            {error && (<Error error="Invalid Credentials" />)}
            {loading && (<Loader />)}
            <form>
            <input type = "text" placeholder='email' className='form-control' value = {email} required onChange = {(e)=>{setemail(e.target.value)}} />
            <input type = "password" placeholder='password' className='form-control' value = {password} required onChange = {(e)=>{setpassword(e.target.value)}} />
            <div className='text-end'>
                <button type = 'submit' className='btn mt-3' >Login</button>
            </div></form>
           
        </div>
        <a style= {{color:'black'}} href='/register' className='m-3'>Click Here to Register</a>
      </div>
     </div>
    
   </div>
  )
}
