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
          <input type='text' name='email' value={this.state.email} required />
          <email>Email</email>
          <input
            type='text'
            name='password'
            value={this.state.password}
            required
          />
          <email>Password</email>
        </form>
      </div>
    );
  }
}
