const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const { body, check, validationResult } = require('express-validator');
const User = require('../models/User');
const Course = require('../models/Course');

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

        const userId = req.user.id; //From auth middleware decoded from token 

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

module.exports = router;
