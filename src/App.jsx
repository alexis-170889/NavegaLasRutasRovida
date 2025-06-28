import './App.css'
import Contador from './components/Contador/Contador';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className='container'>
      <Header/>
      <Contador/>
      <ItemListContainer greetings="Somos Moon, tu nueva ropa interior favorita"/>
    </div>
  );
};

export default App;
