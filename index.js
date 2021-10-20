const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://sshusshu:rmeodu11!!@cluster0.gemb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {})
  .then(() => console.log("mongo db connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hi");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// mongodb+srv://sshusshu:<password>@cluster0.gemb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
