const jwt = require("jsonwebtoken");

const Tokendeocde = (req, res, next) => {
  let token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ msg: "Token Expired" });
      }
      req.user = user;
      next();
    });
  }
  else{
    return res.status(403).json({ msg: "Token Not Found" });
  }
};

module.exports = Tokendeocde;