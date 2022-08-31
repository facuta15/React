
import React from 'react'
import Card from 'react-bootstrap/Card';
import Contador from "./Contador"
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from './CustomProvider';

const ItemDetail = ({item}) => {

const {agregarProducto}= useContext(contexto)
const [estadoPadre, setEstadoPadre] = useState(0);
const [confirmed, setConfirmed] = useState(false);

  const onAdd = () => {
      item.cantidad = estadoPadre;
      agregarProducto(item,estadoPadre);
      setConfirmed(true);
  }
  
  
if(confirmed){
  return(
    <div class="text-center mt-5">
      <Link to="/cart/">
          <button type="button">
              Finalizar compra!
          </button>
      </Link>
    </div>
      
  )
}else{
  return (
    <div class="text-center h-25 d-inline-block p-2">
      <Card className="text-center rounded me-2">
        <Card.Header>{item.nombre}</Card.Header>
        <Card.Body>
          <Card.Title>Precio : ${item.precio}</Card.Title>
          <Card.Text>
            {item.detail}
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