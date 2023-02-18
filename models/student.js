const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["placed", "not_placed"],
  },
  dsa: {
    type: Number,
    required: true,
  },
  webd: {
    type: Number,
    required: true,
  },
  react: {
    type: Number,
    required: true,
  },
  interviews:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Interview",
  }],
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
