const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const { body, check, validationResult } = require('express-validator');
const User = require('../models/User');
const Course = require('../models/Course');
const Trainer = require('../models/Trainer');

const cloudinary = require('../config/cloudinary');
const upload = require('../uploads/multer');
const fs = require('fs');

const router = express.Router();

//  TO Upload User Docs

// @route   POST /api
// @desc    User docs
// @access  Private
router.post(
    '/documents',
    fetchuser,
    upload.array('image'),
    async (req, res) => {
        console.log("request reached");

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userID = req.user.id; //From auth middleware decoded from token 

        const uploader = async (path) => await cloudinary.uploads(path, "SkillsRoot");

        const urls = [];

        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath); // cloudinary path appended to urls
            fs.unlinkSync(path);
        }

        let images = [];
        for (const url of urls) {
            images.push(url.url);
        }

        console.log(images);
        // done working

        try {
            const user = await User.findById(userID);
            user.documents = images;
            await user.save();

            res.json({ msg: "Documents Uploaded Successfully" });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error!');
        }
    }
);


// create a course
// @route   POST /api/courses
// @desc    Create a course
// @access  Private
router.post(
    '/courseCreate',
    fetchuser, async (req, res) => {
        const { name,
            description,
            location,
            timing } = req.body;

        const userId = req.user.id; //From auth middleware decoded from token

        const newCourse = new Course({
            name,
            description,
            location,
            timing
        });

        await newCourse.save();
    }
);



// fetch all users whose document is not null and whose isVerified is false
// @route   GET /api/toverify
// @desc    Get all verification requests
// @access  Private

router.get('/toverify', fetchuser, async (req, res) => {
    try {
        const users = await User.find({
            $and: [
                { documents: { $ne: null } },
                { isVerified: false }
            ]
        });
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!');
    }
}
);


module.exports = router;
