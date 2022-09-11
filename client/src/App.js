import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

import bootstrap from  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreens from './screens/Ordersscreens';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Userslist from './screens/Userslist';
import Productslist from './screens/Productslist';
import Addproduct from './screens/Addproduct';
import Editproduct from './screens/Editproduct';
import Footer from './components/Footer';
import Orderslist from './screens/Orderslist';
import GeoLocation from './screens/Geolocation';
import Geolocations from './screens/Geolocation';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NewsletterForm from './components/NewsletterForm';
import Orderinfo from './screens/Orderinfo';
function App() {
  return (
    <PayPalScriptProvider
    options={{ "client-id": "AeW8LXrRnnynd_K6cKtEcSLdImmsSPkYCGsKgpHu6bIhRhpbjJEQgQccDXffFwnVcv6osxvUeuLsiPTc" }} >
    <div className="App">
      <Navbar/>
      <BrowserRouter> 
      <Routes >
      <Route path= ''  element ={<Homescreen/>}  />
      <Route path = '/product/:id' element ={<Productdescscreen/>} />
      <Route path= '/cart'  element ={<Cartscreen/>}  />
      <Route path= '/register'  element ={<Registerscreen/>}  />
      <Route path= '/login'  element ={<Loginscreen/>}  />
      <Route path= '/orders'  element ={<Ordersscreens/>}  />
      <Route path= '/orderinfo/:id'  element ={<Orderinfo/>}  />
      <Route path= '/profile'  element ={<Profilescreen/>}  />
      <Route path= '/admin'  element ={<Adminscreen/>}  />
      <Route path= '/admin/'  element ={<Userslist/>}  />
      <Route path= '/admin/productslist'  element ={<Productslist/>}  />
      <Route path= '/admin/addnewproduct'  element ={<Addproduct/>}  />
      <Route path= '/admin/editproduct/:id'  element ={<Editproduct/>}  />
      <Route path= '/admin/orderslist'  element ={<Orderslist/>}  />
      <Route path= '/GeoLocation'  element ={<Geolocations/>}  />
      </Routes>
      </BrowserRouter>
    </div>
    </PayPalScriptProvider>
  );
}

export default App;
