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

module.exports.interviewsList = async (req, res) => {
  res.render("interviewsList");
};

module.exports.resultAllocation = async (req, res) => {
  res.render("resultAllocation");
};
