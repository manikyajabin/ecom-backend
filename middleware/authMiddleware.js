const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  // ✅ Check if header exists
  if (!authHeader) return res.status(401).json({ message: "Access Denied" });

  // ✅ Extract token correctly
  const token = authHeader.split(" ")[1]; 

  if (!token) return res.status(401).json({ message: "No Token Provided" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};


module.exports = authMiddleware;
