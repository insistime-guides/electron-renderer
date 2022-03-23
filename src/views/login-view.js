'use strict';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// login
import LoginContainer from '@components/login/login-container.js';

/**
 * login view
 */
class LoginView extends React.Component {
  render() {
    return (
      <LoginContainer />
    );
  }
}

ReactDOM.render(
    <LoginView />,
    document.getElementById('root')
);