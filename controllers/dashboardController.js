const Student = require("../models/student");
const Interview = require("../models/interview");
const Result = require("../models/result");

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.addStudent = async (req, res) => {
  res.render("addStudent");
};

module.exports.addInterview = async (req, res) => {
  res.render("addInterview");
};

module.exports.studentsList = async (req, res) => {
  res.render("studentsList");
};

module.exports.interviewAllocation = async (req, res) => {
  const students = await Student.find();
  const interviews = await Interview.find();
  res.render("interviewAllocation", {
    Students: students,
    Interviews:interviews
  });
};

module.exports.resultAllocation = async (req, res) => {
  const details = await Interview.find()
    .populate("students", "name email")
    .exec((err, interviewDetails) => {
      if (err) {
        console.log(err);
      } else {
        res.render("resultAllocation", {
          interviewDetails: interviewDetails,
        });
      }
    });
};
