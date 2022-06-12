const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const { body, check, validationResult } = require('express-validator');

const Trainer = require('../models/Trainer');

const cloudinary = require('../config/cloudinary');
const upload = require('../uploads/multer');
const fs = require('fs');

const router = express.Router();


// route for adding new trainer applicant
// @route   POST /api/trainer
// @desc    Add a new trainer
// @access  Private
router.post(
    '/trainer',
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

        const { mobileNumber, gender, sector } = req.body;

        console.log(images);
        // done working

        try {
            // ccreate a new trainer
            const newTrainer = new Trainer({
                user_id: userId,
                mobileNumber: mobileNumber,
                gender: gender,
                sector: sector,
                documents: images,
            });
            res.json("Trainer Application sent!");

        }
        catch (err) {
            console.log(err);
            res.json(err);
        }
    }
);

module.exports = router;