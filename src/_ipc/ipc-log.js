'use strict';

import { ipcRenderer } from 'electron';

// channel
const channel = 'ipc-log';

/**
 * info log
 * @param {*} msg 
 */
export function infoLog(msg){
  ipcRenderer.send(channel, {msg:msg, type:'info'});
}

/**
 * warn log
 * @param {*} msg 
 */
export function warnLog(msg){
  ipcRenderer.send(channel, {msg:msg, type:'warn'});
}

/**
 * error log
 * @param {*} msg 
 */
export function errorLog(msg){
  ipcRenderer.send(channel, {msg:msg, type:'error'});
}