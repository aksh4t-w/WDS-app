const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

// if (process.env.NODE_ENV !== "prodcution") {
//   require("dotenv").config();
}
// require("dotenv").config({ path: "./.env" });

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("Connected to Database"));

app.use("/", indexRouter);
app.use("/authors", authorRouter);

app.listen(process.env.PORT || 3000);
