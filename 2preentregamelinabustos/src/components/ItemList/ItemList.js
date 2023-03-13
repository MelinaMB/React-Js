import Item from '../Item/Item'
import './ItemList.scss'

export const ItemList = ({ items }) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr />

            <div className='row'>
                { items.map((producto) => <Item key={producto.id} item={producto} />) }
            </div>
        </div>
    )
}