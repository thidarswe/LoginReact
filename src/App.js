import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <p>Salts</p>
        <input type="text" placeholder="admin"></input><br></br>
        <input type="text" placeholder="........"></input><br></br>
        <button className="login">Login</button>
        <div className="or">or</div>
        <button className="Login_google">Login with Google</button>
      </form>
    </div>
  );
}

export default App;
