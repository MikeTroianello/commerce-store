import React, { Component } from 'react';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action=''>
          <input type='email' name='email' value={this.state.email} required />
          <input>Email</input>
          <input
            type='password'
            name='password'
            value={this.state.password}
            required
          />
          <input>Password</input>
        </form>
      </div>
    );
  }
}
