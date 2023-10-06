import './App.css';
import Teste from './components/Teste.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá este é meu novo projeto</h1>
        <Teste 
          name="Guilherme"
        />
      </header>
    </div>
  );
}

export default App;
