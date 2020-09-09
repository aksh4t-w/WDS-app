const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
// if (process.env.NODE_ENV !== "prodcution") {
//   require("dotenv").config();
// }
// require("dotenv").config({ path: "./.env" });

require("dotenv").config({ silent: process.env.NODE_ENV === "production" });
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("Connected to Database"));

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
