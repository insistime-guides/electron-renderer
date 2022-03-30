'use strict';

// react
import React from 'react';

// login
import LoginComponent from '@components/login/login-ui/login.js';

// log
import { infoLog, warnLog, errorLog } from '@util/log.js';

/**
 * login container
 */
export default class LoginContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nameValue: null,
      passwordValue: null
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onPwdChange = this.onPwdChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onNameChange(e){
    this.setState({
      nameValue:e.target.value
    });
  }

  onPwdChange(e){
    this.setState({
      passwordValue:e.target.value
    });
  }

  onClick(){
    const name = this.state.nameValue;
    const pwd = this.state.passwordValue;

    infoLog('login btn click');
    if(name != pwd){
      alert('login error');
      errorLog('name != pwd');
      return;
    }

    if(name != 'admin'){
      alert('login error');
      errorLog('name != admin');
      return;
    }

    alert('login success');
    warnLog('login success');
    window.electron.toIndexWindow();
  }

  render() {
    return (
      <>
        <LoginComponent 
          onClick = {this.onClick}
          onNameChange = {this.onNameChange}
          onPwdChange = {this.onPwdChange}
        />
      </>
    );
  }
}