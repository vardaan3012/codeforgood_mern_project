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
        console.log("request reached");

        const user = await User.findById(userId);
        user.verified = true;
        await user.save();


        // User.findByIdAndUpdate(userId, { isVerified: true });

        res.json({ msg: 'Verification status changed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

module.exports = router;