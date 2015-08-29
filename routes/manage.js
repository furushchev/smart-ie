var mongoose = require('mongoose');
var Device = mongoose.model('Device');
var Command = mongoose.model('Command');
var exec = require('child_process').exec;

