import { Link } from 'react-router-dom';
import './Navbar.scss';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from '../CartWidgets/CartWidgets';



export const Navbar = () => {
    return (
        <header className="header shadow p-3 mb-5 bg-body-tertiary rounded">
            <Nav className="nav">
                <div className="imglogo">
                    {/* <!-- logo de pagina --> */}
                    <Link to="/">
                        <img src='/img/logo.png' alt="logonav" />
                    </Link>

                    <h1>Kioshi Deco</h1>
                </div>
                <div>
                    <div className="links">
                        <Link to="/" className="links">Inicio</Link>
                        <Link to="/productos/bano" className="links">Baño</Link>
                        <Link to="/productos/cocina" className="links">Cocina</Link>
                        <Link to="/productos/dormitorio" className="links">Dormitorio</Link>
                        <Link to="/productos/living" className="links">Living</Link>
                        <Link to="/productos/oficina" className="links">Oficina</Link>
                        <Link to="/productos/comedor" className="links">Comedor</Link>
                        
                        <CartWidget />
                    </div>
                </div>

            </Nav>
        </header>
    )
}