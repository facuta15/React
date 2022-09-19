import Page from "./Page";
import { toast } from "react-toastify";
import { useState } from "react";
import { useCarrito } from "./CustomProvider";
import ItemListContainer from "./ItemListContainer";
import { contexto } from "./CustomProvider";
import { useContext } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";


const Cart = () => {
  const { carrito } = useCarrito();
  const { cantidad } = useContext(contexto);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const nombreCompleto = `${nombre} ${apellido}`;
  const handleChangeNombre = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setNombre(value);
  };

  const handleChangeApellido = (e) => {
    const input = e.target;
    const value = input.value;
    setApellido(value);
  };
  const handleChangeEmail = (e) => {
    e.preventDefault();
    const input = e.target;
    const value = input.value;
    setEmail(value);
  };

  const handleConfirm = () => {
    const orden = {
      items: carrito,
      total: precioTotal,
      buyer: {
        name: { nombreCompleto },
        email: { email },
      },
      date: serverTimestamp(),
    };
    console.log(orden);
    const ordersCollection = collection(db, "orders");
    const consulta = addDoc(ordersCollection, orden);

    consulta
      .then((res) => {
        toast.success(`Orden ${res.id} creada con exito!`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calcularPrecioTotal = () => {
    let total = 0;
    carrito.forEach((element) => {
      total = element.cantidad * element.precio;
    });
    return total;
  };

  let precioTotal = calcularPrecioTotal();

  return (
    <Page titulo="Carrito" subtitulo="Productos seleccionados:">
      <div>
        <h2>{cantidad}</h2>
      </div>
      <ItemListContainer carrito={carrito}></ItemListContainer>
      <div className="fw-bold">El precio total es de:{precioTotal}</div>
      <div className="justify-content-center">
        <p className="fw-bold">Ingrese sus datos</p>
        
        <InputGroup className="mb-3">
          <InputGroup.Text className="col-12"></InputGroup.Text>
          <Form.Control
            placeholder="Nombre"
            onChange={handleChangeNombre}
            value={nombre}
            />
          <InputGroup.Text className="col-12"></InputGroup.Text>
          <Form.Control
            placeholder="Apellido"
            onChange={handleChangeApellido}
            value={apellido}
            />
          <InputGroup.Text className="col-12"></InputGroup.Text>
          <Form.Control
            placeholder="Email"
            onChange={handleChangeEmail}
            value={email}
            />
        </InputGroup>
      </div>
      <Button variant="success"onClick={handleConfirm}>Finalizar Compra </Button>
      <Button variant="secondary">
        <Link to="/">Seguir Comprando </Link>
      </Button>
    </Page>
  );
};
export default Cart;
