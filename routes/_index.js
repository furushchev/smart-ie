var mongoose = require('mongoose');
var Device = mongoose.model('Device');

exports.get_url = '/';
exports.get = function(req, res){
  Device.find({}, function(err, devices){
    if (err) return req.flash("error", "Some error occurs: " + err);
    res.render('index', {
      title: 'ハイテク根津コントローラ',
      devices: devices
    });
  });
};

