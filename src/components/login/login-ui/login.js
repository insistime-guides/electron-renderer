'use strict';

// react
import React from 'react';

// login
import 'normalize.css';
import './login.scss';
import LoginInput from './login-input.js';
import LoginBtn from './login-btn.js';

/**
 * login component
 */
export default class LoginComponent extends React.Component {
  render() {
    return (
      <div className='login-container'>
          <div className='login-title'></div>
          <LoginInput type='text' onChange={this.props.onNameChange}/>
          <LoginInput type='password' onChange={this.props.onPwdChange}/>
          <LoginBtn onClick={this.props.onClick} name='login'/>
      </div>
    );
  }
}