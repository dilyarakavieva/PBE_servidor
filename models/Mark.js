const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  subject: String,
  student_uid: String // Para asociar tareas a un estudiante
});

module.exports = mongoose.model('Task', TaskSchema);
