import ItemDetail from "./ItemDetail"

const ItemDetailList = ({ details }) => {
    return (
        <section>
            {details.map((detail) => {
                return <ItemDetail detail={detail.detalle}/>
            })}
        </section>
    )
}
export default ItemDetailList