'use strict';

/**
 * info log
 * @param {*} msg 
 */
export function infoLog(msg){
  window.electron.log(msg, 'info');
}

/**
 * warn log
 * @param {*} msg 
 */
export function warnLog(msg){
  window.electron.log(msg, 'warn');
}

/**
 * error log
 * @param {*} msg 
 */
export function errorLog(msg){
  window.electron.log(msg, 'error');
}