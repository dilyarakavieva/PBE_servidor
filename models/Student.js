const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  uid: String,
  name: String,
});

module.exports = mongoose.model('Student', StudentSchema);
