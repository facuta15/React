import Item from "./Item"


const ItemList = ({ productos  , id}) => {
    console.log("ID:"+id)
    let productosFiltrados =[] 
    if(id !== undefined){
        productosFiltrados = productos.filter((producto)=>{
            console.log("ID categoria:"+ producto.categoryID);
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