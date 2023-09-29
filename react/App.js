import './App.css';
import Foundation from './Foundation';
import Nav from './Nav';
import LandingPage from './LandingPage';
import User from './User'
import Loginpage from './Loginpage';

function App() {
  return (
    <div className="App">
       <Nav /> 
       <Loginpage />
       <LandingPage/> 
       <Foundation/> 
       <User/>

      
    </div>
  );
}

export default App;
