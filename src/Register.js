import React from 'react';
import ReactDOM from 'react-dom';
import './Register.css';
class Register extends React.Component {
  render() {
    return (
      <form>
      <div className="upper"><label>Sign up</label><a href="#">Log in</a></div>
      <div className="labelgp"><label>name</label></div>
      <div className="inputgp"><input type="text"/ ></div>
      <div className="labelgp"><label>name</label></div>
      <div className="inputgp"><input type="text"/ ></div>
      <div className="labelgp"><label>name</label></div>
      <div className="inputgp"><input type="text"/ ></div>
      <div className="labelgp"><label>name</label></div>
      <div className="inputgp"><input type="text"/ ></div>
      <div className="labelgp"><label>name</label></div>
      <div className="inputgp"><input type="text"/ ></div>
      <div className="btn"><button>Submit</button></div>
      </form>
    );
  }
}
export default Register;
