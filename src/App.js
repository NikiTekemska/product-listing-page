import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Filter } from './components/Filter';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products.json`)
        .then(res => res.json())
        .then(data => {
          setProducts(data.products)
        })
  },[]);
 console.log(products)
  return (
    <div className="App">
      < Header />
      <Filter />
    </div>
  );
}

export default App;
