'use strict';

import { ipcRenderer } from 'electron';

// channel
const channel = 'ipc-to-index';

/**
 * ipc to index
 */
export function ipcToIndex(){
  ipcRenderer.send(channel);
}