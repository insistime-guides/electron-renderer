'use strict';

import { ipcRenderer } from 'electron';

// channel
const channel = 'ipc-login-success';

/**
 * ipc login success
 */
export async function ipcLoginSuccess(name){
  const res = await ipcRenderer.invoke(channel, name);
  console.log(channel, res);
}