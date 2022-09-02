
import Page from "./Page"
import { toast } from "react-toastify";
import { useState } from "react"
import { useCarrito } from "./CustomProvider";
import ItemListContainer from "./ItemListContainer";
import { contexto } from "./CustomProvider"
import { useContext } from "react"
import { db } from "../firebase"
import { collection, addDoc , serverTimestamp } from "firebase/firestore"



const Cart = () => {
  const { carrito } = useCarrito()
  const {cantidad} = useContext(contexto)
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  
  
  
  const nombreCompleto = `${nombre} ${apellido}`;
  const handleChangeNombre = (e) => {
    e.preventDefault()
    const input = e.target
    const value = input.value
    setNombre(value)
  }
  
  const handleChangeApellido = (e) => {
    const input = e.target
    const value = input.value
    setApellido(value)
  }
  const handleChangeEmail = (e) => {
    e.preventDefault()
    const input = e.target
    const value = input.value
    setEmail(value)
  }
  
  const handleConfirm = () => {
    
    const orden = {
      items: carrito,
      total : precioTotal,
      buyer : {
        name : {nombreCompleto},
        email : {email}
      },
      date : serverTimestamp()
    }
    console.log(orden);
    const ordersCollection = collection(db, "orders")
    const consulta = addDoc(ordersCollection, orden)
    
    consulta
    .then((res)=>{
        toast.success(`Orden ${res.id} creada con exito!`)
      })
      .catch(error => {
        console.log(error)
      })
    }
    
    const calcularPrecioTotal = () =>{
      let total =0
      carrito.forEach(element => {
        total = element.cantidad * element.precio
      });
      return total;
    }
    
    
    let precioTotal =calcularPrecioTotal()
    
    return (
      <Page titulo="Carrito" subtitulo ="Productos seleccionados:">
        <div>
          <h2>{cantidad}</h2>
        </div>
        <ItemListContainer carrito = {carrito}></ItemListContainer>
        <div>
          El precio total es de:{precioTotal}
        </div>
        <div>
          <p>Ingrese sus datos</p>
        <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre} />
        <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido} />
        <input type="text" placeholder="Email" onChange={handleChangeEmail} value={email} />
        </div>
      <button onClick={handleConfirm}>Finalizar Compra </button>
      <button>
      <a href="/">Seguir Comprando </a>
      </button>
    </Page>
    )
  }
  export default Cart


