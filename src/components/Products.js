import { useState, useEffect } from 'react';
const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products.json`)
        .then(res => res.json())
        .then(data => {
          setProducts(data.products)
        })
  },[]);
 console.log(products)