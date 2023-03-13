import './CartWidgets.scss';
import { Link } from "react-router-dom"

export const CartWidget = () => {
    return (
         <div className= "cartwidget">
            <Link>
            <img className= "cart" src="/img/cart.svg" alt="imgcarrito" />
            </Link>
            <p className="numero">1</p>
        </div>
    )
}