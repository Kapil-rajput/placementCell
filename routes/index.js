const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const dashboardController = require('../controllers/dashboardController');
const studentController = require('../controllers/studentController');
const interviewController = require('../controllers/interviewController')
const { initializingPassport, isAuthenticated } = require("../config/passport");



router.get("/", (req, res) => res.render("home"));
router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));
router.get("/dashboard", isAuthenticated, dashboardController.dashboard);
router.get("/addstudent", isAuthenticated, dashboardController.addStudent);
router.get("/addinterview", isAuthenticated, dashboardController.addInterview)
router.get("/studentsList", isAuthenticated, dashboardController.studentsList);
router.get("/interviewAllocation",isAuthenticated,dashboardController.interviewAllocation);
router.get("/resultAllocation", isAuthenticated, dashboardController.resultAllocation);



router.get("/logout", userController.logout);
router.post("/register", userController.register);
router.post("/login", userController.login);


router.post("/addStudent", isAuthenticated, studentController.addStudent);
router.post("/addInterview", isAuthenticated, interviewController.addInterview);
router.post("/interviewAllocation",isAuthenticated,interviewController.interviewAllocation);
router.post("/resultAllocation",isAuthenticated,interviewController.resultAllocation);

module.exports = router;