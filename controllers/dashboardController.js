//importing database students for students
//interview for all interview
//result for all the interview result
// convertor for csv report 
//fs to read and write file
const Student = require("../models/student");
const Interview = require("../models/interview");
const Result = require("../models/result");
const convertor = require("objects-to-csv");
const fs = require('fs')


// for rendering dashboard
module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};


//for rendering add student page
module.exports.addStudent = async (req, res) => {
  res.render("addStudent");
};

//for rendering add interview page
module.exports.addInterview = async (req, res) => {
  res.render("addInterview");
};


//for rendering interview allocation page
module.exports.interviewAllocation = async (req, res) => {
  const students = await Student.find();
  const interviews = await Interview.find();
  res.render("interviewAllocation", {
    Students: students,
    Interviews:interviews
  });
};


// for rendering result allocation page
module.exports.resultAllocation = async (req, res) => {
  const interviews = await Interview.find().populate("students");
  const students = await Student.find().populate("interviews");
  res.render("resultAllocation", {
    Students: students,
    Interviews:interviews
  })
    
};


// for dwonloading report of students
module.exports.report = async (req, res) => {
   const studentList = await Student.find({});
    const dataPresent = [];
    for (var i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        for (var j = 0; j < student.interviews.length; j++) {
            const id = student.interviews[j];
            const interviewData = await Interview.findById(id);
            const list = {
                StudentId: student.id,
                Batch: student.batch,
                Name: student.name,
                Email: student.email,
                Status: student.status,
                College: student.college,
                DSA: student.dsa,
                WEBD: student.webd,
                REACT: student.react,
                CompanyName: interviewData.companyName,
                InterviewDate: interviewData.date.toString().substring(4, 15)
            };
            dataPresent.push(list);
        }
    }
    const csv = new convertor(dataPresent);
    await csv.toDisk('./studentData.csv');
    return res.download('./studentData.csv', () => {
        //for deleting file
        fs.unlinkSync('./studentData.csv');
    });
}