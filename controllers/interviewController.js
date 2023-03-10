//importing all the collection of database
const Interview = require("../models/interview");
const Student = require("../models/student");
const Result = require("../models/result");

// function to handle post request to save interview
module.exports.addInterview = async (req, res) => {
  const interview = new Interview({
    companyName: req.body.companyName,
    date: req.body.date,
  });
  try {
    const saveInterview = await interview.save();
    res.redirect("/addInterview");
  } catch (error) {
    console.log(error);
  }
};


// function to save the allocation of interview to the student 
module.exports.interviewAllocation = async (req, res) => {
  const data = {
    companyName: req.body.companyName,
    studentEmail: req.body.studentEmail,
  };
  const student = await Student.findOne({ email: data.studentEmail });
  const interview = await Interview.findOne({ companyName: data.companyName });
  const studentIds = interview.students;
  const interviewIds = student.interviews;
  if (!studentIds.includes(student.id)) {
    const result = new Result({
      student: student.id,
      interview: interview.id,
      result: "NOT_ATTEMPT",
    });
    const saveResult = await result.save();
    studentIds.push(student.id);
    interviewIds.push(interview.id);
    const interviewUpdate = await Interview.findOneAndUpdate(
      { companyName: data.companyName },
      { students: studentIds }
    );
    const studentUpdate = await Student.findOneAndUpdate(
      { email: data.studentEmail },
      { interviews: interviewIds }
    );
    res.redirect("/dashboard");
  } else {
    res.redirect("back");
  }
};


// fucntion to save the student and company with the result
module.exports.resultAllocation = async (req, res) => {
  const data = {
    companyName: req.body.companyName,
    studentEmail: req.body.studentEmail,
    result: req.body.result,
  };
  try {
    const interviewID = await Interview.findOne({ companyName: data.companyName });
    const studentID = await Student.findOne({ email: data.studentEmail })
    const updateResult = await Result.findOneAndUpdate({ interview: interviewID._id, student: studentID._id },{ result: data.result });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};


// function to display all the interviews with the student
module.exports.interviewsList = async (req, res) => {
  const results = await Result.find().populate('student interview').exec(function(err, result){
    res.render("interviewsList", {
      Results:result
    })
  })
};
