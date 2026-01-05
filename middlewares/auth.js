const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const { UNAUTHORIZED } = require("../utils/errors");

function auth(req, res, next) {
  const token = authorization.replace("Bearer ", "");

  const { authorization } = req.headers || {};
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(UNAUTHORIZED).send({ message: "Authorization Error" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch {
    return res.status(UNAUTHORIZED).send({ message: "Authorization Error" });
  }
}

module.exports = auth;
