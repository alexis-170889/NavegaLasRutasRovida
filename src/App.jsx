import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;