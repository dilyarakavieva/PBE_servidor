const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

// Middleware de autenticación por UID
router.use(controller.authMiddleware);

// Endpoints
router.get('/timetables', controller.getTimetables);
router.get('/tasks', controller.getTasks);
router.get('/marks', controller.getMarks);

module.exports = router;
