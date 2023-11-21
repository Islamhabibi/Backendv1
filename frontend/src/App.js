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
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Get());
  }, []);
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <>
      <Add_product />
      <Get_product products={products}/>
      </>
  )
}

export default App;
