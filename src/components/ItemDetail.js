import { Link } from 'react-router-dom';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Contador from "./Contador"

const ItemDetail = ({item}) => {

  const onAdd = (contador) => {
      item.cantidad = contador
  }

  return (
    <div class="d-inline-flex p-2">
      <Card className="text-center rounded me-2">
        <Card.Header>{item.title}</Card.Header>
        <Card.Body>
          <Card.Title>Precio : ${item.price}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <img class="w-25" src={item.image} alt="" />
        </Card.Body>
        <Contador onAdd={onAdd} />
        <div className="d-grid gap-2">
        <Link to={`/cart`}>Confirmar Compra</Link>
        </div>
      </Card>
    </div>
  );
}
export default ItemDetail