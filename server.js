const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const usersRouter = require("./routes/api/users")

require("dotenv").config();

require("./config/db")

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(require("./config/checkToken"))

const port = process.env.PORT || 3001;


// ROUTES HERE!!!
app.use("/api/users", usersRouter)


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
