import './ItemListContainer.scss'

export const ItemListContainer = ( {greeting} ) => {

    return (
        <div className= "Contenedor">
            <h2>Item List container</h2>
            <hr />
            {greeting}
        </div>
    )
}