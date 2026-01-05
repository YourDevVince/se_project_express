const router = require("express").Router();
const {
  validateItemId,
  validateClothingItemBody,
} = require("../middlewares/validation");

const {
  getClothingItems,
  createClothingItem,
  deleteClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItem");

router.get("/", getClothingItems);

router.post("/", validateClothingItemBody, createClothingItem);

router.delete("/:itemId", validateItemId, deleteClothingItem);

router.put("/:itemId/likes", validateItemId, likeItem);

router.delete("/:itemId/likes", validateItemId, dislikeItem);

module.exports = router;
