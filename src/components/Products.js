import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsCard } from './ProductsCard';

export const Products = () =>{
    const [categoryProducts, setCategoryProducts] = useState([]);
    const { category } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products.json`)
        .then(res => res.json())
        .then(data => 
            setCategoryProducts(data[category])
        )
  },[category]);
  console.log(categoryProducts);

  return (
     <>
         <div>
             <h1>{category}</h1>
            {/* <img className={styles.categoryImg} src={categoryRecipes.image} alt="img" /> */}
             {/* <h3>Best way to finish your meal.</h3> */}
         </div>
             <div>{categoryProducts.map(x => <ProductsCard key={x._id} {...x} />)}</div>
        

     </>
 )
}
