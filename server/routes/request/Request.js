var mongoose = require('mongoose');
var RequestSchema = new mongoose.Schema({
  status: String,
  handleBy: String,
  createBy: String,
  type: String
});
mongoose.model('Request', RequestSchema);

module.exports = mongoose.model('Request');
