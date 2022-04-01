'use strict';

/**
 * info log
 * @param {*} msg 
 */
export function infoLog(msg){
  window.electron.logIPC(msg, 'info');
}

/**
 * warn log
 * @param {*} msg 
 */
export function warnLog(msg){
  window.electron.logIPC(msg, 'warn');
}

/**
 * error log
 * @param {*} msg 
 */
export function errorLog(msg){
  window.electron.logIPC(msg, 'error');
}