const express = require("express");
const router = express.Router();

const {
  getOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} = require("../controller/orderIemController");

router.get("/", getOrderItems);
router.get("/:id", getOrderItemById);
router.post("/", createOrderItem);
router.put("/:id", updateOrderItem);
router.delete("/:id", deleteOrderItem);

module.exports = router;
