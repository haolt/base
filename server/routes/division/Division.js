var mongoose = require('mongoose');
var DivisionSchema = new mongoose.Schema({
  abbr: String,
  name: String
});
mongoose.model('Division', DivisionSchema);

module.exports = mongoose.model('Division');
