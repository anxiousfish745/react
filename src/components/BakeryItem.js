export default function BakeryItem(props) {
    const name = props.name;
    const image = props.image;
    const description = props.description;
    const price = props.price;
    const calories = props.calories
    const type = props.type
    const restriction = props.restriction

    return(
        <div className="items">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <p>calories:{calories}</p>
            <p>type:{type}</p>
            <p>Dietary Restrictions:{restriction}</p>
            <button onClick={() => props.addItem(name, price)}>Add To Cart</button>
            <img src={image}></img>
        </div>
    )
}