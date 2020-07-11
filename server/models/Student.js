const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  rollNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  attendance: [
    {
      courseId: {
        type: String,
        required: true,
      },
      record: {
        type: Object, // push key value pairs into this object
        required: true,
      },
    },
  ],
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
