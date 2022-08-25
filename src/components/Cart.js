import ItemList from "./ItemList"
import Page from "./Page"
import { useCarrito } from "./CustomProvider";


const Cart = () => {
    const handleClick=()=>{
        console.log("su compra finalizo")
    }
    
    const { carrito } = useCarrito()
    console.log(carrito);
    return (
      <Page titulo="Carrito" subtitulo ="Productos seleccionados">
        <ItemList carrito = {carrito}></ItemList>
      <button onClick={handleClick}>Finalizar Compra </button>
    </Page>
    )
  }
  export default Cart