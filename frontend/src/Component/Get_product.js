import { Button } from 'bootstrap';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, Get } from './Redux/Action';
import Update_product from './Update_product';

import { Link, Route, Routes } from 'react-router-dom';
import Detail_product from './Detail_product';

function Get_product() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Get());
  }, [])
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <>
      
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "space-around"}}>
      {products.map((e) => (
          <CardGroup>
        <Card style={{ width: "18rem" }}>
        
        <Card.Img variant="top" src={e.image}  style={{width:"50%"}}/>
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text>
           {e.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{e.price}</small>
        </Card.Footer>
        <button onClick={()=>dispatch(DeleteProduct(e._id))}>Delete</button>
        <Update_product data={e}/>
        <Link to={`/detail/${e._id}`}>go to detail</Link>
      </Card>
      </CardGroup>
      ))}
    </div>
  </>
    )
        
   
    

  
}

export default Get_product;