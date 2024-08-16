const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "registration.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});
app.get("/api/user", (req, res) => {
  const user = [
    { name: "John", username: "john", password: "123" },
    { name: "Jane", username: "jane", password: "456" },
    { name: "Bob", username: "bob", password: "789" },
  ];
  res.send(user);
});
app.listen(5003, () => {
  console.log("Server is running on http://localhost:5003");
});
