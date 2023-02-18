const Interview = require("../models/interview")

module.exports.addInterview = async (req, res) => {
  const interview = new Interview({
    companyName: req.body.companyName,
    date: req.body.date,
  });
  try {
    const saveInterview = await interview.save();
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
