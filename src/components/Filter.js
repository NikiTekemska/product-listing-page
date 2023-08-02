import styles from "./Filter.module.css";
export const Filter = () => {
return (
    <form className={styles.filterForm} method="post">
                <h2>Filter</h2>
                <div className="on-dark">
                    <label htmlFor="brand">Brand</label>
                    <select className={styles.category} name="brand" >
                        <option value="Desserts">TommyHilfiger</option>
                        <option value="Salads">TomTailor</option>
                        <option value="Vegan">Tissot</option>
                        <option value="Meat&BBQ">Omega</option>
                        <option value="Fish&Chips">Rolex</option>
                        <option value="Pizza&Pasta">U.S.Pollo</option>

                    </select>
                </div>

                <div className="on-dark">
                    <label htmlFor="material">Material</label>
                    <select className={styles.category} name="material" >
                        <option value="Desserts">Desserts</option>
                        <option value="Salads">Salads</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Meat&BBQ">Meat&BBQ</option>
                        <option value="Fish&Chips">Fish&Chips</option>
                        <option value="Pizza&Pasta">Pizza&Pasta</option>

                    </select>
                </div>

                <div className="on-dark">
                    <label htmlFor="color">Color</label>
                    <select className={styles.category} name="colors">
                        <option value="Desserts">blue</option>
                        <option value="Salads">yellow</option>
                        <option value="Vegan">pink</option>
                        <option value="Meat&BBQ">red</option>
                        <option value="Fish&Chips">green</option>
                        <option value="Pizza&Pasta">brown</option>

                    </select>
                </div>

                <button className={styles.btn} type="submit">Filter</button>

                {/* <p className="field">
                    <span>If you have profile click <Link to="/login">here</Link></span>
                </p> */}
            </form>
)
}