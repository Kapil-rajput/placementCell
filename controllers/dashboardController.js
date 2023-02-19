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


module.exports.interviewAllocation = async (req, res) => {
  const students = await Student.find();
  const interviews = await Interview.find();
  res.render("interviewAllocation", {
    Students: students,
    Interviews:interviews
  });
};

module.exports.resultAllocation = async (req, res) => {
  const interviews = await Interview.find().populate("students");
  const students = await Student.find().populate("interviews");
  res.render("resultAllocation", {
    Students: students,
    Interviews:interviews
  })
    
};
