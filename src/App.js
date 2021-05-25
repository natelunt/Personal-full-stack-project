import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing'
import Explore from './components/Explore/Explore'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Explore/>
    </div>
  )
}

export default App;
