const express = require("express");
const router = express.Router();
const {
  getOneAccount,
  getAllAccounts,
  createAccount,
} = require("./controllers");

router.get("/", getAllAccounts);

router.get("/:id", getOneAccount);

router.post("/", createAccount);

module.exports = router;
