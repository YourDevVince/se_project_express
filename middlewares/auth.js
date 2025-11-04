const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

function auth(req, res, next) {
  const { authorization } = req.headers || {};
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Authorization Error' });
  }
  const token = authorization.replace('Bearer ', '');
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch {
    return res.status(401).send({ message: 'Authorization Error' });
  }
}

module.exports = auth;