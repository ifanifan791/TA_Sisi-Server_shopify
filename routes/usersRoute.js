const express = require("express");
const router = express.Router();

const {
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} = require("../controller/usersController");

router.get("/", getUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
