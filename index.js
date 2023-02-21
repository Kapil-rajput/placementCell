const express = require("express"); // Importing the express library
const expressLayouts = require("express-ejs-layouts"); // Importing the express-ejs-layouts library
const mongoose = require("mongoose"); // Importing the mongoose library
const session = require("express-session"); // Importing the express-session library
const passport = require("passport"); // Importing the passport library
const { initializingPassport, isAuthenticated } = require("./config/passport"); // Importing passport configuration functions
const app = express(); // Creating an instance of express
const flash = require("express-flash"); // Importing the express-flash library
const bcrypt = require("bcrypt"); // Importing the bcrypt library

app.use(
  session({
    secret: "Secret", // Session secret
    resave: false, // Don't save a session if it was not modified
    saveUninitialized: false, // Don't save a session if it has not been initialized
  })
); // Setting up session middleware

const db = require("./config/keys").MONGOURI; // Getting the MongoDB connection string from configuration
mongoose
  .connect(db, { useNewUrlParser: true }) // Connecting to MongoDB with the connection string
  .then(() => console.log("MongoDb Connected")) // If connected successfully, log message to console
  .catch((err) => console.log(err)); // If there is an error, log it to console

initializingPassport(passport); // Configuring Passport authentication
app.use(passport.initialize()); // Initializing Passport
app.use(passport.session()); // Using Passport session middleware

app.use(expressLayouts); // Using EJS layout middleware
app.set("view engine", "ejs"); // Setting the view engine to EJS
app.use(flash()); // Using the express-flash middleware
app.use(express.urlencoded({ extended: false })); // Using body parser middleware

app.use(express.static("public")); // Serving static files from the 'public' directory

const port = 3000; // Setting the port for the server
app.use("/", require("./routes/index")); // Using the routes for the server

app.listen(port, () => console.log(`App listening on port ${port}!`)); // Starting the server and listening on the specified port, logging a message to the console when the server is started.
