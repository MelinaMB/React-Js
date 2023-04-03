import { Link } from "react-router-dom"
import './Item.scss'
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {

    return (
        <div className="d-flex align-items-center justify-content-center col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-3 mb-sm-0 shadow-sm p-3 bg-body-tertiary rounded cards ">

            <Card className="cards">
                <Card.Body>
                    <Card.Title className="text">{item.nombres}</Card.Title>
                    <img src={item.img} alt={item.nombres} className="tarjeta-img" />
                    <hr />
                    <p>Precio:${item.precio}</p>
                    <Link to={`/detail/${item.id}`} className='btn btn-outline-secondary'>Ver Mas</Link>
                </Card.Body>
            </Card>

        </div>

    )

}

export default Item