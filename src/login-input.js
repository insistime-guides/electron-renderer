'use strict';

// react
import React from 'react';

/**
 * login input
 */
export default class LoginInput extends React.Component {
    render() {
        return (
            <div className='login-input'>
                <input type={this.props.type} onChange={this.props.onChange}></input>
            </div>
        );
    }
}