import './ItemListContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [Loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoriaId
            ? query(productosRef, where("categoria", "==", categoriaId))
            : productosRef

        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })

                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoriaId])

    return (
        <div className="contenedor">
            {
                Loading
                    ? <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    : <ItemList items={productos} />
            }
        </div>
    )
}