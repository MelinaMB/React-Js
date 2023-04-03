import { useEffect, useState } from "react"
import { pedirProductoPorId } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import  ItemDetail  from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [Loading, setLoading] = useState(true)
    
    const { itemId } = useParams()
    

    useEffect(() => {
        setLoading(true)

        pedirProductoPorId( Number(itemId) )
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [])
    return ( 
        <div>
           {
            Loading
                ? <h2>Cargando...</h2>
                : <ItemDetail item={item} />
           }

        </div>
    )
}

export default ItemDetailContainer