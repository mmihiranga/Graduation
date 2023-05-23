const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  validateUser,
} = require("../controllers/UserController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/create", createUser);
router.post("/validate", validateUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
