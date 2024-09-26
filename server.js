const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

require("./Models/db");

require("dotenv").config(); // This will allow your app to use environment variables

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

// Serve API routes before static files
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.get("/", (req, res) => {
  res.send("Welcome to backend todo project!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
