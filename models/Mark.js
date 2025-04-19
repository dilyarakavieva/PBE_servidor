const mongoose = require('mongoose');

const MarkSchema = new mongoose.Schema({
  subject: String,
  value: Number,
  student_uid: String
});

module.exports = mongoose.model('Mark', MarkSchema);
