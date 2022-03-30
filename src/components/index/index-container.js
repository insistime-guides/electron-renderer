'use strict';

// react
import React from 'react';

/**
 * index container
 */
export default class IndexContainer extends React.Component {

  onClick(){
    const url = 'https://www.baidu.com/';
    window.electron.openUrl(url);
  }

  render() {
    return (
      <>
        <p>hello world</p>
        <button onClick={this.onClick}>click</button>
      </>
    );
  }
}