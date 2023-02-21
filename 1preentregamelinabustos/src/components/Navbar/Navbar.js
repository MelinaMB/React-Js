import { CartWidget } from '../CartWidgets/CartWidget';
import './Navbar.scss'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
                                                         

export const Navbar = () => {

    return (
        <header clasName="header">
            <nav className="navbar">
                <div className="imglogo">
                    {/* <!-- logo de pagina --> */}
                    <img src='/img/logo.png' alt="logonav" />

                    <h1>Kioshi Deco</h1>
                </div>
                <div className= "link">
                    <div>
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="index.html">Inicio</Nav.Link>
                                <Nav.Link href="#home">Empresa</Nav.Link>
                                <Nav.Link href="#features">Productos</Nav.Link>
                                <Nav.Link href="#pricing">Contacto</Nav.Link>
                                <Form className="d-flex">
                                    <Form.Control type="search" placeholder="Buscar..." className="me-2" aria-label="Search" />
                                    <Button variant="outline-success">Buscar</Button>
                                </Form>
                                <CartWidget />
                            </Nav>
                        </Container>
                    </div>
                </div>
            </nav>
        </header>
    )
}
