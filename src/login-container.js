'use strict';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// login
import LoginComponent from './login-component.js';
import { ipcLoginSuccess } from './ipc/ipc-login.js';

// log
import { infoLog, warnLog, errorLog } from './ipc/ipc-log.js';

/**
 * login container
 */
class LoginContainer extends React.Component {

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
    ipcLoginSuccess(name);
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

ReactDOM.render(
    <LoginContainer />,
    document.getElementById('root')
);