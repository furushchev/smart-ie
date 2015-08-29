var mongoose = require('mongoose');
var Device = mongoose.model('Device');
var Command = mongoose.model('Command');
var exec = require('child_process').exec;

exports.get_url = '/register_command';
exports.get = function(req, res){
  Device.findOne({name: req.query.device},
              function(err, device){
                
  var device = new Device({
    name: req.query.device
  }).save(function(err){
    req.flash('error', err);
    return res.redirect('/');
  });
};


