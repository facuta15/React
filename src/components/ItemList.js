import Item from "./Item"

const ItemList = ({ productos }) => {
    return (
        <section>
            {productos.map((producto) => {
                return <Item producto={producto}/>
            })}
        </section>
    )
}
export default ItemList