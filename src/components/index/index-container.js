'use strict';

// react
import React from 'react';

/**
 * index container
 */
export default class IndexContainer extends React.Component {

  async onClick(){
    const url = 'https://www.baidu.com/';
    window.electron.shellOpenUrl(url);

    await window.electron.lsSet('test', 'nihao');
    let s = await window.electron.lsGet('test');
    console.log(s);
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