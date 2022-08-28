import Item from "./Item"


const ItemList = ({ productos  , id}) => {
    let productosFiltrados =[] 
    if(id != 0){
        productosFiltrados = productos.filter(function(producto){
            return producto.categoryID === id;
        })
        if(!productosFiltrados.length){
            return(
                <div>
                    No hay productos en esta categoria
                </div>
            )
        }else{
            return (
                <section class='text-center'>
                    {productosFiltrados.map((producto) => {
                            return <Item producto={producto}/>
                    })}
                </section>
            )
        }
       
    }
    else{
        return (
            <section class='text-center'>
                {productos.map((producto) => {
                        return <Item producto={producto}/>
                })}
            </section>
        )
    }
    
}
export default ItemList