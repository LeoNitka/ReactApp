
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  const list = ["El hombre gris"]
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar />

      </header>
      
      <ItemListContainer tittle='titulo desde el componente padre' list={list} />
    </div>
  );
}

export default App;
