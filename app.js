'use strict';

var app = require('app');
var http = require('http');
var BrowserWindow = require('browser-window');
var express = require('express');

var api = express();

var main = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  /*
   * Let's fire up the Api
   */
  api.use(require('./App/Api.js'));
  api.listen(51337);

  main = new BrowserWindow({width: 800, height: 600 });
  main.loadUrl('file://' + __dirname + '/App/Client.html');

  main.openDevTools();

  main.on('closed', function() {
    main = null;
  });

  /*
   * External Url's should be opened in your default browser.
   */
  main.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('shell').openExternal(url);
  });
});

