import React from 'react';
// import ReactDOM from 'react-dom';
// import Layout from '../components/layout.js'
import './test.css';
class layout extends React.Component {
  render(){
    return(
      <div>
      <center>
        Member Login
      </center>
      <form>
      <button type="button" className="close">x</button>
      <input type="text" className="input_user" placeholder="User Name"/><br/>
      <input type="password" className="input_password" placeholder="Password"/><br/>
      <button type="button">Login</button>
      <div className="upload">
        <div>Drage here
        <input type="file"
         id="avatar" name="avatar"
         accept="image/png, image/jpeg" autocomplete="off"/>
         </div>
       </div>
      </form>
      </div>
    )
  }
}

export default layout;
