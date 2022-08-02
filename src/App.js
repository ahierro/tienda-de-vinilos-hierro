import { useEffect, useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [id, setId] = useState("1");
  const onSelect = (id) => {
    setId(id)
  }
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting='Hola, bienvenido a Tienda de Vinilos!' onSelect={onSelect}></ItemListContainer>
      <ItemDetailContainer id={id} onSelect={onSelect} />
    </div>
  );
}

export default App;
