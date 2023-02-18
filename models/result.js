const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  interview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Interview",
  },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
