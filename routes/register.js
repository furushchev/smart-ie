var mongoose = require('mongoose');
var Device = mongoose.model('Device');

exports.get_url = '/register_device';
exports.get = function(req, res){
  var device = new Device({
    name: req.query.device
  }).save(function(err){
    req.flash('error', err);
    return res.redirect('/');
  });
};


