import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsCard } from './ProductsCard';

export const Products = () =>{
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [values, setValues] = useState("");
    const { category } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products.json`)
        .then(res => res.json())
        .then(data => 
            setCategoryProducts(data[category])
        )
  },[category]);
  console.log(categoryProducts);

  const openFilter = () => {

  }

  const changeHandler = (e) => {
    setValues(state => ({...state, [e.target.name]:e.target.value}))
  }

  return (
     <>
         <div>
             <h1>{category}</h1>
             <button onClick={openFilter}>Open filter</button>
             <div>
             <label htmlFor="sort">Sort</label>
             <select name="sort" value={values} onChange={changeHandler} >
             <option value="a-z">Alphabetical a-z</option>
             <option value="z-a">Alphabetical z-a</option>
             <option value="price-ascending">Price ascending</option>
             <option value="price-descending">Price descending</option>
             </select>
             
             </div>
             
            {/* <img className={styles.categoryImg} src={categoryRecipes.image} alt="img" /> */}
             
         </div>
             <div>{categoryProducts.map(x => <ProductsCard key={x._id} {...x} />)}</div>
        

     </>
 )
}
