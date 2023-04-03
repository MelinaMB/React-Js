import { Navbar } from '../components/Navbar/Navbar';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from '../components/Cart/Cart'
import Checkout from '../components/Checkout/Checkout'
import { Routes, Route, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/productos/:categoriaId" element={<ItemListContainer />} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="Checkout" element={<Checkout />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default PrivateRoutes