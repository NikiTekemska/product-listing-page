import styles from './ProductsCard.module.css'
export const ProductsCard = ({
    brand,
    img,
    price
}) => {
    return (
        <ul className={styles.ProductsCard}>
            <li>
                <h1>{brand}</h1>
                <img src={img} alt="img" />
                <h3>{price}</h3>
            </li>
        </ul>

    )
}