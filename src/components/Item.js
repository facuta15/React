import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Item = ({ producto }) => {
  return (
    <Card className="col-3" style={{ minwidth: '10rem'}} >
        <Card.Img className="h-75" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
          Precio : ${producto.precio}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
          <Link to={`/detalle/${producto.id}`}>ver detalle</Link>
          </small>
        </Card.Footer>
      </Card>
  );
}
export default Item

      