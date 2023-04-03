import './ItemListContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [Loading, setLoading] = useState (true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((response) => {
                if (!categoriaId) {
                    setProductos(response)
                } else {
                    setProductos(response.filter((prod) => prod.categoria === categoriaId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoriaId])



    return (
        <div className="contenedor">
            {
                Loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }

        </div>
    )
}