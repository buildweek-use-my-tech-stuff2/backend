const jwt = require("jsonwebtoken")
const secrets = require("../passcode/secret.js")

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    console.log(req.headers);

    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ you: "error on token" });
        } else {
          req.decodedJwt = decodedToken;
          console.log(req.decodedJwt);
          next();
        }
      })
    } else {
      throw new Error("invalid auth data");
    }
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};