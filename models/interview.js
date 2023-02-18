const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;
