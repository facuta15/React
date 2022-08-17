import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Item = ({ producto }) => {
  return (
    <div class="d-inline-flex p-2">
      <Card className="text-center rounded me-2">
        <Card.Header>{producto.nombre}</Card.Header>
        <Card.Body>
          <Card.Title>Precio : ${producto.precio}</Card.Title>
                 <Link to={`/detalle/${producto.id}`}>ver detalle</Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Item