'use strict';

import { ipcRenderer } from 'electron';

/**
 * ipc login success
 */
export async function ipcLoginSuccess(name){
  const res = await ipcRenderer.invoke('ipc-login-success', name);
  console.log('ipc-login-success', res);
}