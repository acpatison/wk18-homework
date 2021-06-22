const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3000;

// Express
const app = express();

// App
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Models Connect
const db = require("./models");

// Routes Connect
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// App listen on Port outlined
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});