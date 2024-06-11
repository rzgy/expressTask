const express = require("express");
const router = express.Router();
const upload = require("../../middleWares/multer");
const {
  getOneAccount,
  getAllAccounts,
  createAccount,
} = require("./controllers");

router.get("/", getAllAccounts);

router.get("/:id", getOneAccount);

router.post("/", upload.single("profilePicture"), createAccount);

module.exports = router;
