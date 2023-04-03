import './CartWidgets.scss';
import { FaCartArrowDown } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)

    return (
        <div className="cartwidget">
            <Link to="/cart">
                <FaCartArrowDown className="cart" />
            </Link>
            <p className="numero">{totalCantidad()}</p>
        </div>
    )
} 