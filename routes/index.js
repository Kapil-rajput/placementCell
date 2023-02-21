const express = require('express'); // Importing the express library
const router = express.Router(); // Creating a router instance
const userController = require('../controllers/userController'); // Importing the user controller
const dashboardController = require('../controllers/dashboardController'); // Importing the dashboard controller
const studentController = require('../controllers/studentController'); // Importing the student controller
const interviewController = require('../controllers/interviewController'); // Importing the interview controller
const jobController = require('../controllers/jobController'); // Importing the job controller
const { initializingPassport, isAuthenticated } = require("../config/passport"); // Importing passport configuration functions

router.get("/", (req, res) => res.render("home")); // Setting up the route to the home page
router.get("/login", (req, res) => res.render("login")); // Setting up the route to the login page
router.get("/register", (req, res) => res.render("register")); // Setting up the route to the register page
router.get("/dashboard", isAuthenticated, dashboardController.dashboard); // Setting up the route to the dashboard page, which requires authentication
router.get("/addstudent", isAuthenticated, dashboardController.addStudent); // Setting up the route to add a student, which requires authentication
router.get("/addinterview", isAuthenticated, dashboardController.addInterview); // Setting up the route to add an interview, which requires authentication
router.get("/interviewAllocation", isAuthenticated, dashboardController.interviewAllocation); // Setting up the route to interview allocation, which requires authentication
router.get("/resultAllocation", isAuthenticated, dashboardController.resultAllocation); // Setting up the route to result allocation, which requires authentication
router.get("/report", isAuthenticated, dashboardController.report); // Setting up the route to the report page, which requires authentication
router.get("/jobs", isAuthenticated, jobController.jobs); // Setting up the route to the jobs page, which requires authentication
router.get("/studentsList", isAuthenticated, studentController.studentsList); // Setting up the route to the list of students page, which requires authentication
router.get("/interviewsList", isAuthenticated, interviewController.interviewsList); // Setting up the route to the list of interviews page, which requires authentication

router.get("/logout", userController.logout); // Setting up the route to log out of the system
router.post("/register", userController.register); // Setting up the route to register a new user
router.post("/login", userController.login); // Setting up the route to log in to the system

router.post("/addStudent", isAuthenticated, studentController.addStudent); // Setting up the route to add a new student, which requires authentication
router.post("/addInterview", isAuthenticated, interviewController.addInterview); // Setting up the route to add a new interview, which requires authentication
router.post("/interviewAllocation", isAuthenticated, interviewController.interviewAllocation); // Setting up the route to allocate interviews, which requires authentication
router.post("/resultAllocation", isAuthenticated, interviewController.resultAllocation); // Setting up the route to allocate results, which requires authentication

module.exports = router; // Exporting the router for use in the application.
