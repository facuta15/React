
import Page from "./Page"
import { useCarrito } from "./CustomProvider";
import ItemListContainer from "./ItemListContainer";
import { useState } from "react";


const Cart = () => {
  const { carrito } = useCarrito()
    const handleClick=()=>{
        console.log("su compra finalizo")
    }
    // const [total,setTotal] = useState(100)

    const calcularPrecioTotal = () =>{
      let total =0
        carrito.forEach(element => {
          total = total + element.price
        });
        return total;
    }
    
    console.log(carrito);
    let precioTotal =calcularPrecioTotal()
    
    return (
      <Page titulo="Carrito" subtitulo ="Productos seleccionados">
        <ItemListContainer carrito = {carrito}></ItemListContainer>
        <div>
          El precio total es de:{precioTotal}
        </div>
      <button onClick={handleClick}>Finalizar Compra </button>
      <button>
      <a href="/">Seguir Comprando </a>
      </button>
    </Page>
    )
  }
  export default Cart