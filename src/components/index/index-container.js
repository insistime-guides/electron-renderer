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
    const res = await window.electron.shortcutGlobal('CommandOrControl+X', 'shortcutShowMenu');
    console.log(res);
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