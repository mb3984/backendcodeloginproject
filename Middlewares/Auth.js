const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Authorization Header: ", authHeader); // Log the full header

  if (!authHeader) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is required" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Extracted Token: ", token); // Log the extracted token

  if (!token) {
    return res
      .status(403)
      .json({ message: "Unauthorized, token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token: ", decoded); // Log the decoded token
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT Error: ", err.message); // Log any JWT errors
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};

module.exports = ensureAuthenticated;
