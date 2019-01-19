// var http = require("http");

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

const express = require("express");
const app = express();
const portNo = 8080;

app.get("/", (req, res) => {
  console.log("req on " + new Date().toISOString());
  res.send("Hello. Today is " + new Date().toISOString());
});

app.get("/json", (req, res) => {
  console.log("req on " + new Date().toISOString());
  res.json({ now: new Date().toISOString() });
});

app.listen(portNo, () => {
  console.log(`Started on ${portNo}`);
});
