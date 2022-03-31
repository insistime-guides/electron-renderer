'use strict';

// react
import React from 'react';

// log
import { infoLog } from '@util/log.js';

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

    infoLog('nihao nihao');
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