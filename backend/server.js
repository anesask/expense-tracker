const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });
const transactions = require("./routes/transactions");

// Config
const PORT = process.env.PORT || 5000;

// Express Config
const app = express();
// Body Parser
app.use(express.json());

// Morgan Config
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/transactions", transactions);

connectDB();

if (process.env.NODE.ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.white.bold
  )
);
