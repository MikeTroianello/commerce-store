import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action=''>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required
            label='email'
            handleChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            label='password'
            required
            handleChange={this.handleChange}
          />
          <input
            type='submit'
            value='Submit Form'
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}
