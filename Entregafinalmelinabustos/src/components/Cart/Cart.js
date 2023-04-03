import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import "./Cart.scss"
import Card from 'react-bootstrap/Card';

export const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="no-hay-productos">
                <div className="no-hay">
                    <h2>No tienes productos agregados</h2>
                    <br />
                    <Link to="/" className="btn btn-outline-info">Volver</Link>
                </div>
            </div>
        )
    }


    return (
        <div className="compra">
            <div>
                <h2>Tu compra</h2>
                <hr />
            </div>

            <div className="row">
                <div className="col-xxl-10 col-xl-9 col-lg-8 col-md-8 col-sm-7 shadow-sm p-3 bg-body-tertiary rounded">
                    <div className="row">
                        {
                            cart.map((prod) => (
                                <div key={prod.id} className="tarjeta-carrito shadow-sm col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 mb-sm-0">
                                    <Card className="tarjeta-carrito1">
                                        <Card.Body>
                                            <h4>{prod.nombres}</h4>
                                            <img src={prod.img} alt={prod.nombres} />
                                            <small>Precio unitario: $ {prod.precio}</small>
                                            <br />
                                            <small>Cantidad: {prod.cantidad}</small>
                                            <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                                            <button onClick={() => eliminarDelCarrito(prod.id)} className="btn btn-outline-danger"><FaRegTrashAlt /></button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5">
                    <div className="total">
                        <h3>TOTAL: $ {totalCompra()} </h3>
                        <button onClick={vaciarCarrito} className="btn btn-outline-danger"> Vaciar carrito</button>
                        <Link className="btn btn-outline-success" to="/checkout">Terminar mi compra</Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

