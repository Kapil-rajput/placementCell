
module.exports.jobs = async (req, res) => {
  const response = await fetch('https://remotive.com/api/remote-jobs');
  const jobsData = await response.json();
  return res.render("jobs", {
    jobs: jobsData.jobs,
  });
};