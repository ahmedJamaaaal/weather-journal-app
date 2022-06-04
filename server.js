// Setup empty JS object to act as endpoint for all routes
let projectData = {
  
};
// Require Express to run server and routes
/* Dependencies */
var cors = require("cors");
var bodyParser = require("body-parser");
var http = require("http");
// Start up an instance of app
const express = require("express");
const app = express();
/* Middleware*/

// Cors for cross origin allowance
app.use(cors());
app.options("*", cors());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static("website"));

//routes
app.get("/all", (req, res) => {
  res.send(projectData);
});
app.post("/setData", (req, res) => {
  projectData = req.body;
  res.send(projectData);
});
// Setup Server
const port = 3000;

app.listen(port, async () => {
  console.log(`https://localhost:${port}`);
  //console.log(httpServer.);
});
