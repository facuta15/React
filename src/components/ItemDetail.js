
import React from 'react'
import Card from 'react-bootstrap/Card';
import Contador from "./Contador"
import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {


const [estadoPadre, setEstadoPadre] = useState(0);
const [confirmed, setConfirmed] = useState(false);

  const onAdd = () => {
      item.cantidad = estadoPadre;
      setConfirmed(true);
  }
  
  
if(confirmed){
  return(
    <Link to="/cart/">
    <button type="button">
         Finalizar compra!
    </button>
</Link>
  )
}else{
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
        <p>Cantidad: {estadoPadre}</p>
        <Contador estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre} onAdd={onAdd}/>
      </Card>
    </div>
  );
}
}
export default ItemDetail