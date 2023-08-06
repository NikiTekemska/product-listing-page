import './App.css';
import { Header } from './components/Header';
import { Filter } from './components/Filter';
import { Products } from './components/Products';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      < Header />
      <Routes>
        <Route path='/:category' element={<Products />} />
      </Routes>
      <Filter />
    </div>
  );
}

export default App;
