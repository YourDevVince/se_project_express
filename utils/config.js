const {
    JWT_SECRET = "dev-secret",
    MONGODB_URI = "mongodb://127.0.0.1:27017/wtwr_db",
  } = process.env;
  
  module.exports = { JWT_SECRET, MONGODB_URI };