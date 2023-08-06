import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/products.json`)
            .then(res => res.json())
            .then(data => 
                setCategory(Object.keys(data))
            )
      },[]);
      console.log(category);
    return(
        <header className={styles.header}>
            <nav>
                <section>
                    <p>Branding</p>
                </section>
                <ul>
                    {category.map(x => <li><Link to={`/${x}`}>{x}</Link></li>)}
                </ul>
            </nav>
        </header>
    )
}
