import Item from "./Item"
import Row from 'react-bootstrap/Row';

const ItemList = ({ productos  , id}) => {
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
                <section class='text-center row align-items-start '>
                    <Row  xs={6} md={5 } className="g-4 gap-3 justify-content-center p-3">
                    {productosFiltrados.map((producto) => {
                        return <Item producto={producto}/>
                    })}
                    </Row>
                </section>
            )
        }
    }
    else{
        return (
            <section class='text-center row'>
                <Row  xs={6} md={5 } className="g-4 gap-3 justify-content-center p-3">
                {productos.map((producto) => {
                        return <Item producto={producto}/>
                })}
                </Row>
            </section>
        )
    }
    
}
export default ItemList