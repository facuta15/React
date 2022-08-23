import Page from "./Page"
const Cart = () => {
    const handleClick=()=>{
        console.log("su compra finalizo")
    }
    return (
      <Page titulo="Carrito" subtitulo ="Productos seleccionados">
      <button onClick={handleClick}>Finalizar Compra </button>
    </Page>
    )
  }
  export default Cart