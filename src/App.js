import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting='Hola, bienvenido a Tienda de Vinilos!'></ItemListContainer>
    </div>
  );
}

export default App;
