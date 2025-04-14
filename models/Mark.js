const mongoose = require('mongoose');

const MarkSchema = new mongoose.Schema({
  mark: String,
  subject_task: String // Para asociar la nota a algo
});

module.exports = mongoose.model('MRKk', MarkSchema);
