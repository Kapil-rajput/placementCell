const Student = require("../models/student");
const Interview = require("../models/interview");
const Result = require("../models/result");

module.exports.addStudent = async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    batch: req.body.batch,
    college: req.body.college,
    status: req.body.status,
    dsa: req.body.dsa,
    webd: req.body.webd,
    react: req.body.react,
  });
  try {
    const saveStudent = await student.save();
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

module.exports.studentsList = async (req, res) => {
  const student = await Student.find();
  res.render("studentsList", {
    Students:student
  });
};
