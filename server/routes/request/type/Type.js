var mongoose = require('mongoose');
var TypeSchema = new mongoose.Schema({
  name: String
});
mongoose.model('Request_type', TypeSchema);

module.exports = mongoose.model('Request_type');
