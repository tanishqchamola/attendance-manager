const mongoose = require("mongoose");

var attendaceSchema = new mongoose.Schema({
  rollNumber: String,
  name: String,
  data: [
    {
      courseId: String,
      record: Object, // push key value pairs into this object
    },
  ],
});
