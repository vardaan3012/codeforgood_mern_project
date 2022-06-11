const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required : true
    },
    course_links: [
        {
            type: String
        }
    ],
    user_id: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ]
  });
  const Course = mongoose.model('Course', CourseSchema);
  module.exports = Course;