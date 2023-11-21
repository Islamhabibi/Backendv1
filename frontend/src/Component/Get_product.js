import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Get_product({products}) {
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
      </Card>
      </CardGroup>
      ))}
    </div>
  </>
    )
        
   
    

  
}

export default Get_product;