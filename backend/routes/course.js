const express = require('express');
const fetchuser = require('../middleware/fetchuser');

const User = require('../models/User');
const Course = require('../models/Course');


const router = express.Router();

// fetch all courses
// @route   GET /api/course/fetchAll
// @desc    Get all courses
// @access  Public
router.get('/fetchAll', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// enroll a user to a course
// @route   POST /api/course/enroll
// @desc    Enroll user to a course
// @access  Private
router.post('/enroll', fetchuser, async (req, res) => {
    const userId = req.user.id;
    const courseId = req.body.courseId;
    try {

        await User.findByIdAndUpdate(userId, { $push: { course_id: courseId } });
        await Course.findByIdAndUpdate(courseId, { $push: { user_id: userId } });

        res.json({ msg: 'User enrolled' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// unenroll user from the course
// @route   POST /api/course/unenroll
// @desc    Unenroll user from the course
// @access  Private

router.post('/unenroll', fetchuser, async (req, res) => {
    const userId = req.user.id;
    const courseId = req.body.courseId;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        if (!user.courses.includes(courseId)) {
            return res.status(400).json({ msg: 'User not enrolled' });
        }

        // updating the user object
        user.course_id.pull(courseId);
        await user.save();

        // updating the course object
        course.user_id.pull(userId);
        await course.save();

        res.json({ msg: 'User unenrolled' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
