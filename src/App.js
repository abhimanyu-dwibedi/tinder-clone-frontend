// import logo from './logo.svg';
import './App.css';
import Header from './header';
import TinderCardd from './tindercard';
import Swipebutton from './swipebutton';
function App() {
  
  return <div className="app">
    
    {/* header */}
    <Header />
    {/* tinder card */}
    <TinderCardd />

    {/* swipebutton */}
    <Swipebutton />
  </div>
}

export default App;
