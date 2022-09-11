const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
    console.log(token)

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    console.log(config.JWT_SECRET_KEY)
    const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
