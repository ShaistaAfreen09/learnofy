const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require('../middleware/auth');

router.get('/', courseController.getAllCourses);
router.post('/', auth, courseController.createCourse);
router.get('/:id', courseController.getCourseById);
router.put('/:id', auth, courseController.updateCourse);
router.post('/:id/enroll', auth, courseController.enrollCourse);

module.exports = router;