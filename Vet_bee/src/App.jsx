import Petlist from './components/Petlist';
import Header from './components/Header';
import './components/Header.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Pet List</h1>
      <Petlist />
    </div>
  );
}

export default App;
