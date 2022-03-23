'use strict';

// react
import React from 'react';

/**
 * login btn
 */
export default class LoginBtn extends React.Component {
    render() {
        return (
            <div className='login-btn'>
                <button onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        );
    }
}