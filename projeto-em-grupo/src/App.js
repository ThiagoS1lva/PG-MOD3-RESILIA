import './App.css';
import Pessoa from './components/Pessoas';
import List from './components/list';

function App() {

  return (
    <div className="App">
      <Pessoa nome="Thiago" idade="20" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>

    )
}

export default App;
