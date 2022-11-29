import { Card, Button, Row ,Col} from 'react-bootstrap';

export default function BakeryItem(props) {
    const name = props.name;
    const image = props.image;
    const description = props.description;
    const price = props.price;
    const calories = props.calories
    const type = props.type
    const restriction = props.restriction

    return (
        // <Row xs={1} md = {2} className="g-4">
        <Col>
        <Card className='h-100' style={{ width: '22rem', margin: '0.5rem' }}>
            <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>Calories:{calories}</Card.Text>
                    <Card.Text>Type:{type}</Card.Text>
                    <Card.Text>Dietary Restrictions:<br/>{restriction}<br/></Card.Text>
                    <Button variant="outline-dark" onClick={() => props.addItem(name, price)} >Add To Cart</Button>
                </Card.Body>
        </Card>
        </Col>
        // </Row>

    )
}
