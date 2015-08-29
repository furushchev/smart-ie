var exec = require('child_process').exec;

exports.get_url = '/send';
exports.get = function(req,res){
  var command = req.query.command;
  console.log('../scripts/bto_ir_cmd -e -t ' + command);
  var child = exec('../scripts/bto_ir_cmd -e -t ' + command,
                   function(err, stdout, stderr){
                     console.log('stdout: ' + stdout);
                     console.log('stderr: ' + stderr);
                     if (err) {
                       req.flash('error', err);
                       console.log('error: ' + err);
                       return JSON.stringify({result: err});
                     } else {
                       return JSON.stringify({
                         result: stdout
                       });
                     }
                   });
};
