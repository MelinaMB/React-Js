import './CartWidget.scss'

export const CartWidget = () => {
    return (
        <div className= "cartwidget">
            <img className= "cart" src="/img/cart.svg" alt="imgcarrito" />
            <p className="numero">1</p>
        </div>
    )
}