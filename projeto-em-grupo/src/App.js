import './App.css';
import HelloWorld from './components/HelloWorld';



function App() {

  const name = "Thiago"
  return (

    <div className="App">
      <h1>Olá {name}</h1>
      <HelloWorld/>
    </div>

    )
}

export default App;
