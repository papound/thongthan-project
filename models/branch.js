var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Name: {type: String, required: true},
    Price: {type: Number, required: true},
    Unit: {type: String, required: true}
});

module.exports = mongoose.model('Branch', schema, 'branch');