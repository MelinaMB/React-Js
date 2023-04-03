import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from 'react'
import { collection, addDoc, writeBatch, getDocs, where, query, documentId } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

const Checkout = () => {

    const [orderId, setOrderId] = useState(null)
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
            alert("nombre invalido")
            return
        }
        if (values.direccion.length < 3) {
            alert("Direccion invalida")
            return
        }
        if (values.email.length < 5) {
            alert("Email invalido")
            return
        }

        const orden = {
            usuario: values,
            item: cart.map((prod) => ({ id: prod.id, nombre: prod.nombres, precio: prod.precio, cantidad: prod.cantidad })),
            total: totalCompra(),
            feche: new Date()
        }

        const batch = writeBatch(db)

        const productosRef = collection(db, 'productos')
        const ordersRef = collection(db, 'orders')

        console.log(cart.map(prod => prod.id))

        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const response = await getDocs(itemsRef)

        const outOfStock = []

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            addDoc(ordersRef, orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
                })
        } else {
            return (
                <div>
                    <h3>No hay stock del producto</h3>
                </div>
            )

        }

    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    if (orderId) {
        return (
            <div className="no-hay-productos">
                <div className="no-hay">
                    <h2>Tu orden se registro con exito</h2>
                    <br />
                    <p>Guardar tu numero de orden: {orderId}</p>
                    <br />
                    <Link to="/" className="btn btn-outline-info">Volver al inicio</Link>
                </div>
            </div>

        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div>

            <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5">
                    <h2>Checkout</h2>
                    <hr />
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5">
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            value={values.nombre}
                            type={'text'}
                            placeholder='Tu nombre'
                            className="form-control my-2"
                            name="nombre"
                        />
                        <input
                            onChange={handleInputChange}
                            value={values.direccion}
                            type={'text'}
                            placeholder='Direccion'
                            className="form-control my-2"
                            name="direccion"
                        />
                        <input
                            onChange={handleInputChange}
                            value={values.email}
                            type={'email'}
                            placeholder='Tu email'
                            className="form-control my-2"
                            name="email"
                        />
                        <div className="d-grid gap-2 col-6 mx-auto" >
                            <button className="btn btn-outline-info">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout 