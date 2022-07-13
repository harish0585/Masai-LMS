import logo from './logo.svg';
import './App.css';
import { Routers } from './Components/Routers';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routers/>
    </div>
  );
}

export default App;
