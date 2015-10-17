/*
 * So.ciety
 */

var express = require('express');
var user = require('./user/index);

server.use('/user', user);

module.exports = server;
