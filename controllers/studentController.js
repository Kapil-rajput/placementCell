const Student = require("../models/student");



module.exports.addStudent = async (req, res) => {
  const student = new Student({
    name: req.body.name,
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


