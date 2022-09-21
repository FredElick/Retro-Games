import logo from './logo.svg';
import './App.css';
import './drag'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <section>
        <Nav></Nav>
      </section>
      
      <Home></Home>

    </div>
  );
}

export default App;
