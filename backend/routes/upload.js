const express = require('express');
// const auth = require('../middleware/auth');
const { body, check, validationResult } = require('express-validator');
const User = require('../models/User');

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
    // auth,
    upload.array('image'),
    async (req, res) => {
        console.log("request reached");

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // const userId = req.user.id; //From auth middleware decoded from token 

        const uploader = async (path) => await cloudinary.uploads(path, "SkillsRoot");

        const urls = [];

        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath); // cloudinary path appended to urls
            fs.unlinkSync(path);
        }


        let { userID } = req.body;

        let images = [];
        for (const url of urls) {
            images.push(url.url);
        }

        console.log(urls);


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

module.exports = router;
