const router = require("express").Router();
const { validateUpdateUserBody } = require("../middlewares/validation");
const { getCurrentUser, updateProfile } = require("../controllers/users");

router.get("/me", getCurrentUser);

router.patch("/me", validateUpdateUserBody, updateProfile);

module.exports = router;
