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
  result: {
    type: String,
    enum: ["PASS","FAIL","ON_HOLD","NOT_ATTEMPT"],
  },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
