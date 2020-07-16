const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    courseId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    facultyId: {
        type: String,
        required: true,
    },
    students: [
        {
            rollNumber: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
        },
    ],
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
