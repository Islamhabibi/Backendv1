import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Get } from './Component/Redux/Action';
import Add_product from './Component/Add_product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Get_product from './Component/Get_product';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, Route, Routes } from 'react-router-dom';
import Detail_product from './Component/Detail_product';
import Register_user from './Component/Register_user';
import Login from './Component/Login';
import ListUsers from './Component/ListUsers';
function App() {
 

  return (
    <>
      <Add_product />
      <Link to={'/products'}>go home</Link>
      <Link to={'/users'}>Register</Link>
      <Link to={'/user/login'}>Login</Link>
      <Link to={'/users/get'}>Liste of Users</Link>

      <Routes>
        <Route path='/products' element={<Get_product />}/>
        <Route path='/detail/:id' element={<Detail_product/>}/>  
        <Route path='/users' element={<Register_user />}/>
        <Route path='/user/login' element={<Login />}/>
        <Route path='users/get' element={<ListUsers/>}/>

  
      </Routes>
      </>
  )
}

export default App;
