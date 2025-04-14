const mongoose = require('mongoose');

const MarkSchema = new mongoose.Schema({
  subject_task: String // Para asociar la nota a algo
});

module.exports = mongoose.model('MRKk', MarkSchema);
