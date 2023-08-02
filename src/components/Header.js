import styles from './Header.module.css';
import { Link } from 'react-router-dom';
export const Header = () => {
    return(
        <header className={styles.header}>
            <nav>
                <section>
                    <p>Branding</p>
                </section>
                <ul>
                    <li><Link to="/bags">Bags</Link></li>
                    <li><Link to="/shoes">Shoes</Link></li>
                    <li><Link to="/sunglasses">Sunglasses</Link></li>
                    <li><Link to="/whatches">Whatches</Link></li>
                    <li><Link to="/scarfs">Scarfs</Link></li>
                </ul>
            </nav>
        </header>
    )
}
