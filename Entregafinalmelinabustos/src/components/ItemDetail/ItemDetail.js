import { Link, useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount.js'
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    if (item.stock === 0) {
        return (
            <div className="no-hay-productos">
                <div className="no-hay">
                    <h2>No hay stock de este producto</h2>
                    <br />
                    <Link to="/" className="btn btn-outline-info">Volver</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="d-flex align-items-center justify-content-center ">

            <Card className="detail shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <Card.Body>
                    <Card.Title className="text">{item.nombres}</Card.Title>
                    <img src={item.img} alt={item.nombres} className="tarjeta-img" />
                    <hr />
                    <p>{item.descripcion}</p>
                    <p>Precio:${item.precio}</p>
                    <hr />
                    <div className="texto">
                        {item.stock <= 5 && <p>¡{item.stock === 1 ? `Queda solo 1 unidad` : `Quedan solo ${item.stock} unidades`}!</p>}
                    </div>

                    {
                        isInCart(item.id)
                            ? <Link to="/cart" className="btn btn-outline-success mx-2">Terminar mi Compra</Link>
                            : <ItemCount
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
                            />
                    }

                    <button onClick={handleVolver} className='btn btn-outline-secondary'>Volver</button>

                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemDetail