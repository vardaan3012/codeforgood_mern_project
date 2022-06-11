const express = require('express');
const fetchuser = require('../middleware/fetchuser');

const User = require('../models/User');
const Course = require('../models/Course');


const router = express.Router();

// route for changing the verification status of a user
// @route   POST /api/verify/
// @desc    Change the verification status of a user
// @access  Private
router.post('/', fetchuser, async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        user.isVerified = true;
        await user.save();
        res.json({ msg: 'Verification status changed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

module.exports = router;