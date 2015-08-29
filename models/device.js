var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommandSchema = new Schema({
  name: {type: String, required: true },
  command: String
});
mongoose.model('Command', CommandSchema);

var DeviceSchema = new Schema({
  name: { type: String, required: true },
  commands: [CommandSchema]
});
mongoose.model('Device', DeviceSchema);

