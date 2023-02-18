module.exports.dashboard = (req, res) => {
    res.render('dashboard')
}

module.exports.addStudent = async (req, res) => {
    res.render('addStudent')
}

module.exports.addInterview = async (req, res) => {
  res.render("addInterview");
};