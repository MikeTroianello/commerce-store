import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignIn from '../../components/sign-up/sign-up.component';

import './login-signup.scss';

export default function LoginSignup() {
  return (
    <div>
      <div className='sign-in-and-sign-up-page'>
        <SignIn />
      </div>
    </div>
  );
}
