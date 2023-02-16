import './styles/app.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <ItemListContainer /> 
      </body>

    </div>
  );
}

export default App;
