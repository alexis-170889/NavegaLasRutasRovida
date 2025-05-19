import './App.css'
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className='container'>
      <Header/>
      <ItemListContainer greetings="Somos Moon, tu nueva ropa interior favorita"/>
      <button className='btn btn primary'>Mostrar Productos</button>
      <div className='container'>
        <div className='card'>
          <h3>Conjunto 1</h3>
          <p>$1500</p>
          <button className='btn btn secondary'>Agregar a Carrito</button>
        </div>
        <div className='card'>
          <h3>Conjunto 2</h3>
          <p>$2500</p>
          <button className='btn btn secondary'>Agregar a Carrito</button>
        </div>
        <div className='card'>
          <h3>Conjunto 3</h3>
          <p>$3000</p>
          <button className='btn btn secondary'>Agregar a Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default App;
