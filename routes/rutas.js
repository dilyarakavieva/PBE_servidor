const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/timetables', controller.getTimetables); // público
router.get('/tasks', controller.getTasks); // público
router.use(controller.authMiddleware); // después de esto, sí exigir UID
router.get('/marks', controller.getMarks); // protegido


module.exports = router;
