const router = require("express").Router();
const { NOT_FOUND } = require("../utils/errors");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItem");
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post("/signup", createUser);
router.post("/signin", login);

router.get('/items', getClothingItems);

router.use(auth);

router.use("/users", userRouter);
router.use("/items", clothingItemRouter);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;