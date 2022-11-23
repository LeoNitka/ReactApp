
import './App.css';
import Title from './components/title'

function App() {
  const list = ["god of war", "counter strike", "Resident Evil"]
  return (
    <div className="App">
      <header className="App-header">
        <Title tittle='titulo desde el componente padre' list={list} />
      </header>
    </div>
  );
}

export default App;
