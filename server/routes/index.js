const express = require("express");
const router = express.Router();

// models
const Student = require("../models/Student");
const Course = require("../models/Course");

//get all data in student collection
router.get("/student", (req, res) => {
    Student.find({})
        .then((items) => {
            res.json(items);
        })
        .catch((err) => console.log(err));
});

//get data of specific user from collection
router.get("/data", (req, res) => {
    var query = Student.where({ rollNumber: req.query.rollNumber });

    query.findOne((err, doc) => {
        if (err) return err;
        if (doc) {
            console.log(doc);
            res.send(doc);
        } else {
            console.log("No such user found.");
            res.send("No such user found.");
        }
    });
});

// add new student in collection
router.post("/student", (req, res) => {
    const newItem = new Student({
        rollNumber: "CO17359",
        name: "asd",
        attendance: [
            {
                courseId: "CSE-502",
                record: {
                    "10-07-2020": "P",
                },
            },
        ],
    });

    newItem
        .save()
        .then(() => console.log("New item added successfully..."))
        .catch((err) => console.log(err));

    res.status(201).send();
});

//add new course
router.post("/course", (req, res) => {
    const courseId = "CSE-504";
    const title = "C++";
    const facultyId = "sarabjitsingh";

    let newCourse = new Course({
        courseId,
        title,
        facultyId,
    });

    newCourse.save((err) => {
        if (err) throw err;
        else {
            console.log("New course added.");
        }
    });
});

module.exports = router;
