const mongoose = require("mongoose");
require("dotenv").config(); // Ensure dotenv is loaded

const mongoURI = process.env.MONGO_CONN;

console.log("MongoDB URI:", mongoURI); // Debugging line

if (!mongoURI) {
  console.error("MongoDB URI is not defined in environment variables.");
  process.exit(1); // Exit the process if MongoDB URI is not found
}

mongoose
  .connect(mongoURI) // Removed deprecated options
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });
