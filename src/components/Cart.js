
import Page from "./Page"
import { useCarrito } from "./CustomProvider";
import ItemListContainer from "./ItemListContainer";
import { contexto } from "./CustomProvider"
import { useContext } from "react"



const Cart = () => {
  const { carrito } = useCarrito()
  const {cantidad} = useContext(contexto)
    const handleClick=()=>{
        console.log("su compra finalizo")
    }
    // const [total,setTotal] = useState(100)

    const calcularPrecioTotal = () =>{
      let total =0
        carrito.forEach(element => {
          total = element.cantidad * element.precio
        });
        return total;
    }
    
    
    let precioTotal =calcularPrecioTotal()
    console.log(carrito)
    return (
      <Page titulo="Carrito" subtitulo ="Productos seleccionados:">
        <div>
          <h2>{cantidad}</h2>
        </div>
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


