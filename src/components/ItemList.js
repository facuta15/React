import Item from "./Item"


const ItemList = ({ productos },) => {
    return (
        <section class='text-center'>
            {productos.map((producto) => {
                return <Item producto={producto}/>
            })}
        </section>
    )
}
export default ItemList