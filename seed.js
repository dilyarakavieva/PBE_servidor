// seed.js
const mongoose = require('mongoose');
const Timetable = require('./models/Timetable');
const Task = require('./models/Task');
const Mark = require('./models/Mark');
const Student = require('./models/Student');

mongoose.connect('mongodb://localhost:27017/pbe', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
  seedData();
}).catch(err => console.log('Error al conectar con MongoDB', err));

async function seedData() {
  // Limpiar datos anteriores
  await Student.deleteMany({});
  await Timetable.deleteMany({});
  await Task.deleteMany({});
  await Mark.deleteMany({});

  // Crear estudiantes
  const students = await Student.insertMany([
    { uid: 'stu001', name: 'Adriana' },
    { uid: 'stu002', name: 'Carlos' }
  ]);

  // Crear horarios
  await Timetable.insertMany([
    { day: 'Mon', hour: '08:00', subject: 'IPAV', room: 'A3001', teacher: 'Olga' },
    { day: 'Mon', hour: '10:00', subject: 'ICOM', room: 'A3002', teacher: 'Toni Pascual' },
    { day: 'Tue', hour: '08:00', subject: 'PBE', room: 'A3201', teacher: 'Francesc Oller' },
  ]);

  // Crear tareas
  await Task.insertMany([
    { title: 'Ejercicios', description: 'Resolver 10 problemas', date: new Date(), subject: 'IPAV', student_uid: 'stu001' },
    { title: 'Lectura cap. 3', description: 'Resumen del capítulo', date: new Date(), subject: 'ICOM', student_uid: 'stu001' },
    { title: 'Preparar control', date: new Date(), subject: 'PBE', student_uid: 'stu002'  },
  ]);

  // Crear notas
  await Mark.insertMany([
    { subject: 'IPAV', value: 8.5, uid: 'stu001' },
    { subject: 'ICOM', value: 7.0, uid: 'stu001' },
    { subject: 'PBE', value: 10.0, uid: 'stu002' }
  ]);

  console.log('Datos insertados correctamente');
  mongoose.disconnect();
}
