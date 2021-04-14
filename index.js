const express = require("express");
const mongoose = require("mongoose");
const port = 22001;
const app = express();
const ONLINE_DB =
  "mongodb+srv://Achievers:Achievers@cluster0.xg4zd.mongodb.net/money?retryWrites=true&w=majority";
const CodeLab = require("./MVC/Controller");
mongoose
  .connect(ONLINE_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Data base has been connected successfully...!");
  });

app.use(express.json());
app.use("/", CodeLab);

app.listen(port, () => {
  console.log(`${port} is ready...!`);
});
