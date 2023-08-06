import styles from './ProductsCard.module.css'
export const ProductsCard = ({
    brand,
    img,
    price,
    description
}) => {
    return (
        <ul className={styles.ProductsCard}>
            <li>
                <h1>{brand}</h1>
                <img src={img} alt="img" />
                <h3>Price:{price}$</h3>
                <h5>Description:{description}</h5>
                <button>Add to cart</button>
            </li>
        </ul>

    )
}