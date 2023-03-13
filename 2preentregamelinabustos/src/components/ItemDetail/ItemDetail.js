import { useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import './ItemDetail.scss'



const ItemDetail = ({ item }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    navigate()

    return (
        <div className="d-flex align-items-center justify-content-center ">
            {/* <h2>{item.nombres}</h2>
            <img src={item.img} alt={item.nombres} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>

            <button onClick={handleVolver}>Volver</button> */}

            <Card className="detail shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <Card.Body>
                    <Card.Title className="text">{item.nombres}</Card.Title>
                    <img src={item.img} alt={item.nombres} className="tarjeta-img" />
                    <hr />
                    <p>{item.descripcion}</p>
                    <p>Precio:${item.precio}</p>
                    <hr />
                    <button onClick={handleVolver} className='btn btn-light'>Volver</button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemDetail