import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          username: '',
          password: ''
        };
      }
addUser = event => {
    const doo ={username: this.state.username, password: this.state.password }
    axios
    .post(`http://localhost:5000/api/users`, doo)
    .then(addBru => {
        console.log('hey');
    })
    .catch(err => {
        console.log(err);
    })
}

handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


    render(){
        return (
            <div>
                <span className="wow">Register if you can they are watching</span>
                <form className="whatever" >
          <input
          className="boxes"
            onChange={this.handleInputChange}
            placeholder="username here"
            value={this.state.username}
            name="username"
            type="text"
          />
          <input
          className="boxes"
            onChange={this.handleInputChange}
            placeholder="password here"
            value={this.state.password}
            name="password"
            type="text"
          />
          <Link to='/'><button className="Butts" onClick={this.addUser} value='submit' type='submit'>Register</button></Link>
          </form>
            </div>
        )
    }
} 

export default Register;