const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/learndatabase")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const user = mongoose.model('user', userSchema);

function createUser() {
  const user1 = new user({
    name: "Janhvi",
    email: "janhvi@gmail.com",
    age: 20,
  });

  user1.save()
  .then(() => console.log("user created successfully" + user1));
}
createUser();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5006, () => {
  console.log("Server is running on port 5006");
});
