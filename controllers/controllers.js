const Timetable = require('../models/Timetable');
const Task = require('../models/Task');
const Mark = require('../models/Mark');
const Student = require('../models/Student');

// Middleware de autenticación
exports.authMiddleware = async (req, res, next) => {
  const uid = req.headers['uid'];
  if (!uid) return res.status(401).json({ error: 'Falta UID' });

  const student = await Student.findOne({ uid });
  if (!student) return res.status(403).json({ error: 'UID no registrado' });

  req.student = student;
  next();
};

// GET /timetables
exports.getTimetables = async (req, res) => {
  const filter = parseQuery(req.query); // Implementación de la función parseQuery
  const data = await Timetable.find(filter).sort({ day: 1, hour: 1 });
  res.json(data);
};

// GET /tasks
exports.getTasks = async (req, res) => {
  const filter = parseQuery(req.query);
  const data = await Task.find(filter).sort({ date: 1 });
  res.json(data);
};

// GET /marks
exports.getMarks = async (req, res) => {
  const filter = { student_uid: req.student.uid, ...parseQuery(req.query) };
  const data = await Mark.find(filter).sort({ subject: 1 });
  res.json(data);
};

// Función para convertir los parámetros de consulta (?hour[gt]=08:00) a { hour: { $gt: "08:00" } }
function parseQuery(query) {
  const result = {};
  for (const key in query) {
    if (key.includes('[')) {
      const [field, op] = key.split(/\[|\]/);
      if (!result[field]) result[field] = {};
      const mongoOp = { gt: '$gt', gte: '$gte', lt: '$lt', lte: '$lte', eq: '$eq' }[op];
      result[field][mongoOp] = query[key] === 'now' ? new Date().toISOString() : query[key];
    } else {
      result[key] = query[key];
    }
  }
  return result;
}
