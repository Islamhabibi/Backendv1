import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Get_product from './Component/Product/Get_product';
import Add_product from './Component/Product/Add_product';
import Detail_product from './Component/Product/Detail_product';
import Register_user from './Component/Users/Register_user';
import Login from './Component/Users/Login';
import ListUsers from './Component/Users/ListUsers';
import Navbar from './Component/Navbar';
import Basket from './Component/Product/Basket';
import Cancel from './Component/Product/cancel';
import Success from './Component/Product/success';
import Contact from './Component/Users/Contact';
function App() {


  return (
    <>
      <Navbar/>
      
       

      <Routes>
        <Route path='/products' element={<Get_product />} />
        <Route path='/detail/:id' element={<Detail_product />} />
        <Route path='/basket/' element={<Basket />} />
        <Route path='/users' element={<Register_user />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='users/get' element={<ListUsers />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
    </>
  )
}

export default App;
