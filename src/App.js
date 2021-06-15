import './App.css';
import Nav from './components/Nav/Nav';
import Auth from './components/Auth/Auth';
import Landing from './components/Landing/Landing';
import Explore from './components/Explore/Explore';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Auth/>
      <Landing/>
      <Explore/>
    </div>
  )
}

export default App;
