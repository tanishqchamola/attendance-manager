const express = require("express");
const passport = require("passport");
const router = express.Router();

// models
const Student = require("../models/Student");
const Course = require("../models/Course");
const { update } = require("../models/Student");

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

//add new course -- may not be required
router.post("/addCourse", (req, res) => {
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

//get all students of the course
router.get("/courseStudents", (req, res) => {
    var query = Course.where({ courseId: req.query.course });

    query.findOne((err, doc) => {
        if (err) throw err;
        if (doc) {
            console.log(doc);
            res.send(doc);
        } else {
            console.log("No such course found.");
            res.send("No such course found.");
        }
    });
});

//mark attendance for all students in the given course
router.post("/markAttendance", (req, res) => {
    const { course, date, present, absent, leave } = req.body;

    present.forEach((student) => {
        var placeholder = {};
        placeholder["attendance.$.record." + date] = "P";
        Student.findOneAndUpdate(
            {
                rollNumber: student,
                "attendance.courseId": course,
            },
            {
                $set: placeholder,
            },
            (error) => {
                if (error) throw error;
                console.log(`${student}'s attendance updated!`);
            }
        );
    });

    absent.forEach((student) => {
        var placeholder = {};
        placeholder["attendance.$.record." + date] = "A";
        Student.findOneAndUpdate(
            {
                rollNumber: student,
                "attendance.courseId": course,
            },
            {
                $set: placeholder,
            },
            (error) => {
                if (error) throw error;
                console.log(`${student}'s attendance updated!`);
            }
        );
    });

    leave.forEach((student) => {
        var placeholder = {};
        placeholder["attendance.$.record." + date] = "L";
        Student.findOneAndUpdate(
            {
                rollNumber: student,
                "attendance.courseId": course,
            },
            {
                $set: placeholder,
            },
            (error) => {
                if (error) throw error;
                console.log(`${student}'s attendance updated!`);
            }
        );
    });
});

//Google O-Auth
router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

//google o-auth redirect
router.get(
    "/auth/google/redirect",
    passport.authenticate("google"),
    (req, res) => {
        var id = encodeURIComponent(req.user);
        //console.log(req.user); //this is the unique user id which each google account has
        res.redirect(`http://localhost:8080/#/Dashboard?id=${id}`);
    }
);

//logout route
router.get("/auth/logout", (req, res) => {
    req.logout();
    res.send(req.user);
});

module.exports = router;
