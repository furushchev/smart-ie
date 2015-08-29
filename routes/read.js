var exec = require('child_process').exec;

exports.get_url = '/read';
exports.get = function(req, res){
  var child = exec('../scripts/bto_ir_cmd -e -r',
                   function(err, stdout, stderr){
                     console.log('stdout: ' + stdout);
                     console.log('stderr: ' + stderr);
                     if (err) {
                       req.flash('error', err);
                       console.log('error: ' + err);
                       return JSON.stringify({});
                     } else {
                       return JSON.stringify({
                         command: stdout
                       });
                     }
                   });
};
