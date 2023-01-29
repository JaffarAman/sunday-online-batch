const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const TodoModel = require("./model/todoSchema");
const router = require("./routes");

const DBURI =
  "mongodb+srv://jaffaraman:admin@cluster0.plzjw54.mongodb.net/test";

mongoose
  .connect(DBURI)
  .then((res) => console.log("mongodb connect"))
  .catch((err) => console.log("DB ERROR", err));

app.use(cors()); //ALLOW CROSS-ORIGIN
app.use(express.json()); //ALLOW REQ-BODY PARSER

//all routes
app.use(router);

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));
