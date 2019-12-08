import React, { Component } from 'react';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action=''>
          <input
            type='email'
            name='email'
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type='submit'
            value='Submit Form'
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
