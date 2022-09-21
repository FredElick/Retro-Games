// import logo from './logo.svg';
import './App.css';
import './drag'
import Home from './pages/Home';
import Nav from './components/Nav'

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
